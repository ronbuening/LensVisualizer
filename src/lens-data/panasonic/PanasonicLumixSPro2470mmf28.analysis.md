## Patent Reference and Design Identification

- **Patent:** US 2021/0055531 A1
- **Priority:** 22 August 2019, JP 2019-152063
- **Filed:** 21 August 2020
- **Published:** 25 February 2021
- **Inventors:** Genki Nakazawa; Takao Yamanaka; Yoshiaki Kurioka
- **Applicant:** Panasonic Intellectual Property Management Co., Ltd.
- **Title:** *Zoom Lens System, Image Capture Device, and Camera System*
- **Embodiment analyzed:** First Embodiment / Numerical Example 1

The prescription transcribes the first numerical example associated with Figure 1 and Tables 1–3E. The patent describes a seven-group, large-aperture zoom with a positive–negative–positive–positive–negative–negative–positive power sequence, a stop immediately before the first element of G3, and two independently moving negative focus groups [US 2021/0055531 A1, ¶0028–0049, ¶0160–0162].

The selected production correlation is the PANASONIC LUMIX S PRO 24-70mm f/2.8 (S-E2470). This is a convergent identification rather than a manufacturer statement that the retail lens uses this patent example. The principal correlations are:

1. Panasonic specifies an 18-element, 16-group construction; the patent example contains 18 elements and becomes 16 air-separated groups after its two bonded pairs are counted as single groups.
2. Panasonic specifies three aspherical elements. The example has three elements with two aspherical surfaces each: L5, L14, and L16.
3. Panasonic specifies four ED elements. The patent does not use the proprietary ED designation, but it contains four conspicuously high-Abbe elements: L7 at νd = 70.4, L9 and L11 at νd = 81.6, and L13 at νd = 75.5.
4. The marketed range is 24–70 mm at f/2.8. The unscaled design stations are 24.8400, 40.8776, and 67.5503 mm at approximately f/2.927.
5. Panasonic specifies a 0.37 m closest focusing distance and approximately 0.25× maximum magnification. The final normalized model gives a reconstructed physical tele-end object distance of 370.815 mm and 0.253223× magnification.
6. The patent focuses by counter-moving G5 and G6. Panasonic describes a double-focus system using linear and stepping motors, although neither the patent nor the data establishes which motor drives which optical group.
7. The Japanese priority date precedes Panasonic's 27 August 2019 product announcement by five days.

Marketing and design quantities remain separate throughout this analysis. The retail identity is 24–70 mm f/2.8, whereas the modeled patent endpoints are 24.840237–67.550992 mm and the stored per-state design f-numbers are 2.92728, 2.92703, and 2.92709. No uniform scaling was applied.

## Optical Architecture

The design is a seven-functional-group standard zoom with the power sequence:

`G1 (+) – G2 (−) – G3 (+) – G4 (+) – G5 (−) – G6 (−) – G7 (+)`

Its 18 elements form 16 air-separated groups because L1–L2 and L9–L10 are bonded pairs. The aperture stop lies between L7 and L8 and travels with G3 during zooming. The final data contains exactly one stop, labeled `STO`.

| Functional group | Elements | Computed isolated group EFL | Primary modeled function |
|---|---|---:|---|
| G1 (+) | L1–L3 | +122.210769 mm | Front collector and positive first zoom group |
| G2 (−) | L4–L7 | −22.881005 mm | Strong negative variator |
| G3 (+) | L8–L12 plus stop | +63.765695 mm | Stop-bearing positive relay and main chromatic balancing group |
| G4 (+) | L13–L14 | +34.835997 mm | Positive compensating group with rear aspheric correction |
| G5 (−) | L15 | −51.845583 mm | First internal focus group; moves imageward at close focus |
| G6 (−) | L16 | −120.094701 mm | Second internal focus group; moves objectward at close focus |
| G7 (+) | L17–L18 | +69.391308 mm | Rear positive relay, stationary during focusing |

These group powers are computed from the final modeled arrays. They are not interchangeable with the standalone powers of individual elements. In particular, a positive functional group may contain a negative bonded pair or negative individual members whose in-situ effect depends on the surrounding elements and air spaces.

During wide-to-tele zooming, the G1–G2 interval increases, the G2–G3 and G3–G4 intervals decrease, and the G4–G5 and G5–G6 intervals increase. The G6–G7 interval decreases from wide to middle and then increases slightly toward tele, reproducing the reversal visible in the published spacing row. The rear spacing also increases substantially toward tele. The patent states that G1, the stop/G3 assembly, and G4–G7 move objectward, while G2 follows a locus convex toward the image plane [¶0046–0048].

The computed total-track-to-EFL ratios are greater than one at every station. The computed paraxial BFD values are 21.314818, 31.392325, and 40.553408 mm, each below the corresponding EFL. Under the project definitions, the prescription is therefore neither a telephoto-form system nor a retrofocus system. Those labels would be misleading here.

### Source Normalization and Geometry Model

Two explicitly published 0.01000 mm adhesive media occur between L1–L2 and L9–L10. The modeled surface sequence represents bonded elements with a direct glass-to-glass interface, so those media were collapsed while their axial thicknesses were retained in the downstream element thicknesses. The model therefore uses 3.57220 mm for L2 and 1.01000 mm for L10. This changes the system EFL only at the sub-micrometre level relative to the fully explicit source trace, but it changes the standalone powers of L2 and L10 slightly; the final data values govern this analysis.

The sensor-cover plate at patent surfaces 38–39 was excluded. Its 2.1 mm physical thickness at nd = 1.51680 was replaced by 1.384493671 mm of paraxially equivalent air, followed by the published 1.0 mm image-plane spacing. The modeled rear spacings are therefore 21.300693671, 31.373993671, and 40.595293671 mm at wide, middle, and tele.

The patent publishes no clear apertures or semi-diameters. Every authored semi-diameter is consequently a modeling inference derived from exact meridional ray envelopes at all infinity and published close-focus states. The stop semi-diameter stored in the base surface table is the wide-state value required by the 2.92728 design f-number; the larger middle and tele openings are solved from the zoom-dependent pupil model rather than asserted as patent dimensions.

A rendered-table extraction correction is preserved at the rear group. Patent surface 35 exits L17 to air, while surface 36 begins the nd = 1.95375, νd = 32.3 L18 element. The apparent alternative produced by parsed-text column drift is inconsistent with the patent's group-power table and was not used.

## Element-by-Element Analysis

### D1 — L1 and L2 Bonded Front Pair

#### L1 — Negative Meniscus, convex to object

**nd = 1.92286, νd = 20.9. Glass: N-SF66 (SCHOTT). Standalone f = −290.492310 mm.**

L1 is the negative first member of G1. Its high index and low Abbe number allow a relatively weak negative power to be obtained with shallow external curvature. The patent identifies it as a negative meniscus with its convex face toward the object [¶0030, ¶0039].

#### L2 — Positive Meniscus, convex to object

**nd = 1.80420, νd = 46.5. Glass: N-LASF44 (SCHOTT). Standalone f = +335.272332 mm.**

L2 is bonded behind L1 and supplies nearly balancing positive power. The final direct-cement model gives the L1–L2 pair a computed net EFL of −2079.971228 mm: the pair is only weakly negative despite the much stronger standalone powers of its two members. This bonded net is distinct from the complete G1 power of +122.210769 mm after L3 and the intervening air space are included.

The source adhesive layer has not been modeled as a third optical element. Its 0.01000 mm thickness is included in L2's modeled center thickness, as disclosed above.

### L3 — Positive Meniscus, convex to object

**nd = 1.77250, νd = 49.6. Glass: 773496 — lanthanum crown class (vendor unresolved). Standalone f = +114.759906 mm.**

L3 is the air-spaced positive member that changes the weakly negative D1 pair into a positive first functional group. It supplies most of G1's net positive power and completes the three-element moving front assembly described in ¶0030 and ¶0039.

Its catalog assignment is intentionally limited to a six-digit optical class. The stored nd/νd pair is well defined, but the patent does not identify a manufacturer, and more than one catalog family can represent the class.

### L4 — Negative Meniscus, convex to object

**nd = 1.71300, νd = 53.9. Glass: 713539 — lanthanum crown class (vendor unresolved). Standalone f = −31.105570 mm.**

L4 is the strongest single negative element at the front of G2. Its short negative focal length establishes much of the variator group's −22.881005 mm net power. The element's object-facing convex meniscus form follows the patent description [¶0031, ¶0040].

The moderately high Abbe number reduces the chromatic burden imposed by a strongly powered negative member. Its catalog label remains generic because the nd/νd pair does not uniquely establish a vendor.

### L5 — Biconcave Negative, two aspherical surfaces

**nd = 1.80998, νd = 40.9. Glass: SUMITA K-VC89 catalog equivalent; production supplier not identified. Standalone f = −41.692986 mm.**

L5 is the first aspherical element and the second negative member of G2. Both surfaces, `9A` and `10A`, are aspherical, exactly as stated by the patent [¶0040]. Its placement inside the strongly negative variator gives the two surfaces substantial leverage over wide-angle spherical aberration, coma, distortion, and field behavior as the group changes conjugates during zooming. That functional interpretation is based on position and ray power; the patent does not assign a separate named aberration to each surface.

No public catalog identity was defensible at the stored nd/νd pair. The explicit `Unmatched` label prevents a speculative Sellmeier substitution.

### L6 — Biconvex Positive

**nd = 1.84666, νd = 23.8. Glass: 847238 — dense flint class (vendor unresolved). Standalone f = +46.611745 mm.**

L6 is a strongly positive, high-index member embedded within negative G2. It moderates the group's net negative power and provides an opposite-sign surface-power contribution between L5 and L7. The patent describes it simply as biconvex [¶0040].

Although the six-digit pair corresponds to the N-SF57/J-SF03 class, the patent does not establish the supplier. The data therefore retains a class designation rather than asserting a specific melt source.

### L7 — Negative Meniscus, concave to object

**nd = 1.48749, νd = 70.4. Glass: 487704 — fluor crown class (vendor unresolved). Standalone f = −124.310409 mm.**

L7 is the low-dispersion negative rear member of G2 and sits immediately before the long gap to the aperture stop. Its combination of negative power and high Abbe number reduces the chromatic contribution of the variator while preserving its required net negative power.

The element is one of four high-Abbe members whose count aligns with Panasonic's four-ED-element specification. The patent itself does not call L7 an ED element, so the analysis treats that relation as correlation evidence rather than a proprietary material identification.

### L8 — Positive Meniscus, convex to object

**nd = 1.92286, νd = 20.9. Glass: N-SF66 (SCHOTT). Standalone f = +61.043966 mm.**

L8 is the first refractive element after the aperture stop and the first positive member of G3. Its high index permits substantial positive power in a compact meniscus. The patent identifies L8 as the lens nearest the object in G3 and uses its index in condition (3) [¶0032, ¶0041, ¶0108–0111].

Because L8 has two air interfaces rather than a cemented boundary, its high-index surfaces directly influence the axial ray bundle near the stop. The patent explicitly links the high index of this position to spherical-aberration control, while avoiding a bonded interface at the high ray height [¶0108–0111].

### D2 — L9 and L10 Bonded Pair

#### L9 — Biconvex Positive

**nd = 1.49700, νd = 81.6. Glass: 497816 — ED fluorophosphate crown class (vendor unresolved). Standalone f = +62.232374 mm.**

L9 is the first νd = 81.6 positive element in G3. It is bonded to L10 and provides a low-dispersion positive contribution within the main positive relay. The patent explicitly identifies the 81.6 Abbe number [¶0032, ¶0041].

#### L10 — Biconcave Negative

**nd = 1.92119, νd = 24.0. Glass: HOYA FDS24 catalog equivalent; production supplier not identified. Standalone f = −41.468390 mm.**

L10 is the high-index, low-Abbe negative partner of L9. The opposing power and dispersion of the pair form a compact achromatizing unit, but the data does not support a claim of apochromatic correction or anomalous partial dispersion.

The final direct-cement model gives D2 a net EFL of −143.093904 mm. Thus, although L9 is positive, the bonded pair is net negative. Its in-situ behavior must be distinguished from the complete G3, which remains strongly positive at +63.765695 mm because it also contains L8, L11, and L12 with their intervening spacings.

As with D1, the source's 0.01000 mm adhesive thickness is retained in L10's center thickness rather than represented as a synthetic element.

### L11 — Biconvex Positive

**nd = 1.49700, νd = 81.6. Glass: 497816 — ED fluorophosphate crown class (vendor unresolved). Standalone f = +57.215610 mm.**

L11 is the second νd = 81.6 positive element in G3. Unlike L9, it is air spaced, so both surfaces contribute independently to the relay's positive power and chromatic balance. The patent's condition (2) is directed to these high-Abbe positive members in G3 [¶0105–0107].

The identical nd/νd pair at L9 and L11 supports a common glass class, but not a unique manufacturer. The stored class annotation reflects that limit.

### L12 — Biconcave Negative

**nd = 1.84666, νd = 23.8. Glass: 847238 — dense flint class (vendor unresolved). Standalone f = −73.992657 mm.**

L12 is the negative rear element of G3. It follows the second high-Abbe positive crown and completes the five-element positive relay. Its dense-flint-class dispersion provides the negative chromatic partner required by the two low-dispersion positive elements.

The element is biconcave in both the patent prose and the final data [¶0041]. Its standalone negative power does not make G3 negative; the computed in-situ group power remains +63.765695 mm.

### L13 — Biconvex Positive

**nd = 1.55032, νd = 75.5. Glass: FCD705 (HOYA). Standalone f = +37.068898 mm.**

L13 provides most of G4's positive power. Its high Abbe number reduces axial color while its relatively low index demands appreciable curvature, producing the short +37.07 mm standalone focal length.

FCD705 is an exact public-catalog match at the stored nd/νd pair. This supports a catalog identification, but it does not prove that the production lens uses HOYA material or that Panasonic's UHR designation applies to any specific patent element.

### L14 — Positive Meniscus, convex to object, two aspherical surfaces

**nd = 1.80998, νd = 40.9. Glass: SUMITA K-VC89 catalog equivalent; production supplier not identified. Standalone f = +512.704713 mm.**

L14 is a very weak positive meniscus at the rear of G4. Its refractive power is small compared with L13, but both surfaces are aspherical. This separation of low paraxial power from substantial aspheric departure allows the element to reshape peripheral ray behavior without adding much first-order power.

The patent states that making at least one surface of the image-side lens in G4 aspherical facilitates field-curvature flattening over the zoom range [¶0125]. Numerical Example 1 uses aspheres on both faces, `28A` and `29A`. The rear surface has the largest positive departure from its spherical base among the six authored aspheres at the verified semi-diameters.

### L15 — Negative Meniscus, convex to object

**nd = 1.83481, νd = 42.7. Glass: 835427 — lanthanum dense-flint class (vendor unresolved). Standalone f = −51.845583 mm.**

L15 is the sole element of G5 and the first moving focus group. From infinity to the published shortest-range state, G5 moves toward the image. Because the group contains only this element, its standalone and group focal lengths are effectively the same.

The single-element construction reduces moving mass and follows the patent's preference for at least one single-lens focus group [¶0112–0113]. Its movement grows from 2.1998 mm at wide to 6.8627 mm at tele.

### L16 — Negative Meniscus, convex to object, two aspherical surfaces

**nd = 1.68948, νd = 31.0. Glass: L-TIM28 (OHARA). Standalone f = −120.094701 mm.**

L16 is the sole element of G6 and the second moving focus group. It moves toward the object as the lens focuses closer, counter to G5. Both surfaces, `32A` and `33A`, are aspherical [¶0035, ¶0044, ¶0049].

The counter-motion distributes focus-induced aberration changes across two negative groups rather than forcing one group to carry the entire correction. The patent associates the dual-focus arrangement with control of field-curvature variation over object distance, within a broader architecture that also controls spherical-aberration variation during zooming [¶0098–0099, ¶0112].

The glass identification preserves the OHARA `L-` prefix. Substituting an `S-` family name would be a catalog error. No line-index or partial-dispersion values are authored for this element.

### L17 — Biconvex Positive

**nd = 1.84666, νd = 23.8. Glass: 847238 — dense flint class (vendor unresolved). Standalone f = +39.946411 mm.**

L17 is the positive front member of G7. It receives the ray bundle after the two focus groups and supplies the main positive power of the rear relay. During focusing, G7 remains stationary to within the 0.0001 mm rounding residual in the published gap sums.

The high-index dense-flint class permits a compact, strongly powered biconvex form. Its low Abbe number is balanced by the broader glass strategy of the preceding relay groups rather than by a cemented partner in G7.

### L18 — Biconcave Negative

**nd = 1.95375, νd = 32.3. Glass: 954323 — high-index lanthanum class (vendor unresolved). Standalone f = −85.912081 mm.**

L18 is the negative rear member and last photographic element. Together with L17 it forms the positive G7 relay of +69.391308 mm EFL. The pair is air spaced, not cemented.

The element begins at modeled surface `36`. This assignment follows the rendered Table 1 and the patent's G7 focal-length check; the parsed-text alternative that places the glass at surface 35 is a column-alignment error.

Its 954323 class has exact or rounding-equivalent candidates in more than one authoritative catalog. The data therefore avoids assigning a unique vendor.

## Glass Identification and Selection

The glass names below are catalog-derived annotations applied to the patent's exact nd/νd values. A specific vendor is stated only when the match is sufficiently defensible; otherwise a six-digit class or `Unmatched` label is retained.

| Stored glass annotation | nd | νd | Elements | Status and optical use |
|---|---:|---:|---|---|
| N-SF66 (SCHOTT) | 1.92286 | 20.9 | L1, L8 | Exact public match; high-index, high-dispersion members |
| N-LASF44 (SCHOTT) | 1.80420 | 46.5 | L2 | Exact public match; positive partner in D1 |
| 773496 lanthanum crown class | 1.77250 | 49.6 | L3 | Vendor unresolved; positive G1 member |
| 713539 lanthanum crown class | 1.71300 | 53.9 | L4 | Vendor unresolved; strong negative variator member |
| K-VC89 catalog equivalent (SUMITA) | 1.80998 | 40.9 | L5, L14 | Coefficient-backed coordinate match; production supplier unidentified; both elements are doubly aspheric |
| 847238 dense-flint class | 1.84666 | 23.8 | L6, L12, L17 | Exact six-digit class; vendor unresolved; positive and negative balancing members |
| 487704 fluor crown class | 1.48749 | 70.4 | L7 | High-Abbe negative member of G2 |
| 497816 ED fluorophosphate crown class | 1.49700 | 81.6 | L9, L11 | Two high-Abbe positive members of G3 |
| FDS24 catalog equivalent (HOYA) | 1.92119 | 24.0 | L10 | Exact coordinate match; production supplier unidentified; high-index negative member of D2 |
| FCD705 (HOYA) | 1.55032 | 75.5 | L13 | Exact public match; principal positive member of G4 |
| 835427 lanthanum dense-flint class | 1.83481 | 42.7 | L15 | Vendor unresolved; first focus group |
| L-TIM28 (OHARA) | 1.68948 | 31.0 | L16 | Exact public match; second aspherical focus group |
| 954323 high-index lanthanum class | 1.95375 | 32.3 | L18 | Exact class, vendor unresolved; rear negative element |

The chromatic strategy is concentrated in the two positive relay regions. G3 combines two νd = 81.6 positive elements with high-index negative partners, while G4 begins with the νd = 75.5 L13. L7 adds a νd = 70.4 negative member at the rear of the variator. This arrangement is consistent with the patent's conditions requiring high-Abbe positive members in G3 and G4 [¶0100–0107].

No element carries authored `nC`, `nF`, `ng`, or `dPgF` values because the patent does not publish them. The system is therefore not described as apochromatic, and no anomalous-partial-dispersion claim is made. Manufacturer language describing four ED elements is retained as product metadata and correlation evidence, not converted into unsupported element-level proprietary labels.

## Focus Mechanism

The focus status is `PUBLISHED`; no internal movement was reconstructed from a marketed minimum-focus distance. Tables 3A and 3E directly provide the infinity and shortest-range values of D29, D31, and D33 at all three zoom stations.

G5 moves imageward and G6 moves objectward. The sum D29 + D31 + D33 remains constant to within 0.0001 mm, so G7 is stationary during focus. The two focus strokes increase toward telephoto, as the patent states [¶0049].

| Design station | D29, infinity → close | D31, infinity → close | D33, infinity → close | G5 imageward | G6 objectward | Reconstructed physical MFD | Magnification |
|---|---:|---:|---:|---:|---:|---:|---:|
| 24.8400 mm | 2.9770 → 5.1768 mm | 11.0043 → 4.8064 mm | 3.5504 → 7.5486 mm | 2.1998 mm | 3.9981 mm | 375.312 mm | 0.098508× |
| 40.8776 mm | 3.6205 → 7.2082 mm | 12.9949 → 5.3038 mm | 2.6123 → 6.7157 mm | 3.5877 mm | 4.1034 mm | 372.128 mm | 0.157203× |
| 67.5503 mm | 4.8909 → 11.7536 mm | 16.4729 → 4.8064 mm | 2.6369 → 7.4408 mm | 6.8627 mm | 4.8038 mm | 370.815 mm | 0.253223× |

The physical MFD values restore the omitted cover plate's physical thickness after the paraxial air-equivalent model is solved. The small difference from the fully explicit adhesive trace—0.223 mm at wide, 0.076 mm at middle, and 0.020 mm at tele—is a consequence of the disclosed cement normalization rather than a focus reconstruction.

Panasonic describes the production lens as using a double-focus system combining linear and stepping motors. That source establishes the product's drive arrangement. The patent and numerical model establish only the optical motion of G5 and G6; they do not assign a motor type to either group.

## Aspherical Surfaces

Six aspherical surfaces occur on three elements:

- L5: `9A` and `10A`
- L14: `28A` and `29A`
- L16: `32A` and `33A`

The patent uses the standard conic form

$$
Z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}.
$$

The stored `K` values are therefore direct patent conic constants. No κ-to-K conversion was required. No scaling was applied, so the polynomial coefficients were not transformed.

### L5 Aspheres

**Surface 9A:** `K = 2.77311e-1`, `A4 = 5.79744e-6`, `A6 = −6.69046e-8`, `A8 = 5.10351e-10`, `A10 = −1.99835e-12`, `A12 = 3.11855e-15`.

**Surface 10A:** `K = −1.00000`, `A4 = −2.30482e-6`, `A6 = −7.10387e-8`, `A8 = 5.08729e-10`, `A10 = −2.06473e-12`, `A12 = 3.14110e-15`.

At the inferred and geometry-validated semi-diameters, 9A departs from its spherical base by +0.050546855 mm at 13.5 mm, while 10A departs by −0.207070569 mm at 13.0 mm. The opposed departures reshape both faces of the negative variator element without changing its first-order classification.

### L14 Aspheres

**Surface 28A:** `K = 1.00000`, `A4 = −6.70134e-6`, `A6 = 1.60358e-7`, `A8 = −2.23219e-10`, `A10 = −1.78175e-12`, `A12 = 3.19782e-15`.

**Surface 29A:** `K = 1.00000`, `A4 = 1.30709e-5`, `A6 = 1.88360e-7`, `A8 = −2.30320e-10`, `A10 = −1.13940e-12`, `A12 = 1.07849e-16`.

At the verified semi-diameters, 28A departs by +0.302851100 mm at 15.0 mm and 29A by +1.419571675 mm at 14.5 mm. These comparatively large departures occur on an element whose standalone focal length is +512.704713 mm, illustrating that paraxial power and aspheric correction strength are separate design quantities. The patent associates this rear-G4 asphere location with field-curvature control [¶0125].

### L16 Aspheres

**Surface 32A:** `K = −1.00000`, `A4 = −6.49741e-5`, `A6 = 3.26474e-7`, `A8 = −1.14181e-9`, `A10 = 2.42790e-12`, `A12 = −2.35868e-15`.

**Surface 33A:** `K = 9.97939e-1`, `A4 = −7.70073e-5`, `A6 = 3.23600e-7`, `A8 = −1.22916e-9`, `A10 = 2.63417e-12`, `A12 = −2.84998e-15`.

At the verified 14.5 mm semi-diameter, 32A departs by −1.342828761 mm and 33A by −1.570254845 mm. Because L16 is a moving negative focus group, these surfaces act at changing conjugates. Their placement is consistent with the patent's objective of limiting focus-induced aberration variation, although the patent does not allocate a separate quantitative aberration contribution to each surface.

The patent does not state whether these are molded, polished, or hybrid aspheres. No manufacturing method is inferred from the coefficients alone.

## Conditional Expressions

The first numerical example satisfies all seven published conditions. Values below are recomputed from the final modeled arrays or copied directly where the condition is a stored glass property.

| Condition | Patent range or printed value | Final computed value | Interpretation |
|---|---:|---:|---|
| (1) `νd_pG3G4` | > 75; Table 10: 81.6 | 81.6 | Highest Abbe number among positive elements in G3/G4 |
| (2) `νd_pG3` | > 75; Table 10: 81.6 | 81.6 | High-Abbe positive members within G3 |
| (3) `Nd_G31` | > 1.85; Table 10: 1.92286 | 1.92286 | Index of L8, the object-side element of G3 |
| (4) `TH_L1L2 / TH_G1` | 0.3–0.55; Table 10: 0.429 | 0.429391 | Relative thickness of the bonded front pair within G1 |
| (5) `f_GR / f_GF` | 0.3–5.0; Table 10: 2.316 | 2.316392 | Absolute focal-length ratio of G6 to G5 |
| (6) `THair_G3G4 / fT` | 0.01–0.30; Table 10: 0.053 | 0.053184 | Wide-state G3–G4 air gap normalized by tele EFL |
| (7) `TH_FB / L_W` | 0.05–0.5; Table 10: 0.14 | 0.139786 | Physical last-lens-to-image interval normalized by wide track |

The small differences from the three-decimal Table 10 entries are source-rounding effects. None indicates a transcription correction.

## Verification Summary

The final TypeScript arrays reproduce the patent's first-order quantities at all three infinity states:

| Station | Final computed EFL | Patent EFL | Reconstructed physical track | Patent track | Design f-number |
|---|---:|---:|---:|---:|---:|
| Wide | 24.840236654 mm | 24.8400 mm | 157.499700 mm | 157.4997 mm | 2.92728 |
| Middle | 40.877978141 mm | 40.8776 mm | 164.542400 mm | 164.5424 mm | 2.92703 |
| Tele | 67.550992495 mm | 67.5503 mm | 181.862800 mm | 181.8628 mm | 2.92709 |

The largest EFL residual is 0.0006925 mm. A sequential height/reduced-angle trace and an independent matrix implementation agree at stored numerical precision. The surface-by-surface Petzval sum, using $\phi/(nn')$, is +0.001515191726292 mm⁻¹, corresponding to a signed Petzval radius of −659.982484 mm under the stated convention.

The inferred semi-diameter model passes the available geometry gate at all published infinity and close-focus states. The minimum element edge thickness is 0.985680 mm, the maximum actual rim angle is 56.4585°, the minimum physical cross-gap clearance is 0.040094 mm, and the selected traced bundles retain at least 0.126140 mm non-stop aperture margin. No render trim is required by the local diagnostic proxy.

These geometric quantities are computed modeling results, not patent clear-aperture specifications. The binding clearance occurs across the 0.36590 mm air gap between surfaces 23 and 24. Layout controls are not used to conceal an overlap or conic-domain violation.

The stop radii implied by the patent's f-numbers and the traced entrance pupil are 10.123452, 11.606576, and 13.416779 mm from wide to tele. Because the patent gives no physical stop diameter, these values are normalized consequences of the published f-number rather than independent aperture measurements.

## Sources

1. [US 2021/0055531 A1, *Zoom Lens System, Image Capture Device, and Camera System*](https://patents.google.com/patent/US20210055531A1/en) — fixed patent and Numerical Example 1.
2. [Panasonic LUMIX S PRO 24-70mm F2.8 product specifications](https://www.panasonic.com/uk/consumer/cameras-camcorders/lumix-camera-lenses/lumix-s-lenses/s-e2470.specs.html) — marketed focal range, aperture, construction, mount, focus distance, magnification, diaphragm, and absence of optical stabilization.
3. [Panasonic product announcement, 27 August 2019](https://na.panasonic.com/news/panasonic-announces-new-nn-l-mount-interchangeable-lens-lumix-s-pro-24-70mm-f2.8-s-e2470) — launch timing and double-focus motor description.
4. [SCHOTT optical-glass downloads](https://www.schott.com/en-gb/products/optical-glass-p1000267/downloads), [OHARA optical glass](https://www.ohara-inc.co.jp/en/product/01001/), and [HOYA optical-glass data](https://www.hoyaoptics.eu/download/optical-glass-data) — exact and class-level glass checks.
5. [HIKARI optical-glass catalog](https://www.hikari-g.co.jp/products/catalog.html), [CDGM optical glass](https://www.cdgmgd.com/), and [SUMITA optical glass](https://www.sumita-opt.co.jp/en/products/optical/) — cross-vendor class audit and unresolved-pair checks.
