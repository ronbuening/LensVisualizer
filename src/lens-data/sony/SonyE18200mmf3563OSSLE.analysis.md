## Patent Reference and Design Identification

**Patent:** US 8,553,339 B2\
**Application Number:** 13/112,127\
**Priority:** May 24, 2010\
**Filed:** May 20, 2011\
**Granted:** October 8, 2013\
**Inventors:** Hisayuki Yamanaka; Makoto Kanai; Masafumi Sueyoshi; Masaharu Hosoi\
**Assignees:** Tamron Co., Ltd.; Sony Corporation\
**Title:** *Enhanced Variable Power Zoom Lens*\
**Embodiment analyzed:** Embodiment 1 / Example 1

The prescription modeled here is the selected production correlation for the **SONY E 18-200mm f/3.5-6.3 OSS LE (SEL18200LE)**. The patent itself does not identify SEL18200LE by product name, and Sony does not document this patent as the production prescription. The identification is therefore a correlation established from convergent optical, mechanical, corporate, and chronological evidence rather than manufacturer confirmation.[1–3]

The principal correlation points are:

1. **Focal-length range.** Embodiment 1 publishes infinity-focus focal lengths of 18.4671, 69.9995, and 193.7966 mm; the production lens is marketed as 18–200 mm.[1,2]
2. **APS-C field.** The patent uses image height $Y=14.2$ mm and publishes a full field of 78.47° to 8.20°. Sony identifies SEL18200LE as an APS-C E-mount lens and specifies 76° to 8°.[1,2]
3. **Construction.** The patent labels 17 physical lens pieces in 13 air-spaced groups. Sony specifies 13 groups / 17 elements for SEL18200LE; the original SEL18200 instead uses 12 groups / 17 elements.[1–3]
4. **Aspheric topology.** Embodiment 1 has five aspheric surfaces distributed over four physical lens pieces: L4, L8, L10, and L15. Sony describes four aspherical lens elements in SEL18200LE, matching the patent's physical-piece count even though one piece is bi-aspheric.[1,2]
5. **Image stabilization.** The patent moves the cemented L10+L11 subset orthogonally to the optical axis for anti-vibration correction. Sony specifies in-lens Optical SteadyShot for SEL18200LE.[1,2]
6. **Close focus.** The patent publishes 0.5 m close states at all three zoom positions, and Sony specifies a 0.5 m minimum focus distance for SEL18200LE.[1,2]
7. **Mechanical envelope.** Sony specifies a 62 mm filter for SEL18200LE; the original SEL18200 uses 67 mm. The corrected Figure 1 front-group envelope is consistent with the smaller LE barrel.[1–3]
8. **Corporate correspondence.** The patent is jointly assigned to Tamron Co., Ltd. and Sony Corporation, consistent with the LE lens's optical construction being distinct from the original Sony 12-group design.[1–3]

One material correlation caveat remains. Independent paraxial tracing of the patent's telephoto 0.5 m state gives $|m|=0.34916\times$, whereas Sony specifies 0.27× maximum magnification for SEL18200LE.[2] The project therefore treats SEL18200LE as the closest production correlation, not as proof that the patent embodiment is the exact production prescription. The patent's 13-group optical count is also distinct from its five functional moving groups G1–G5.

The model is not uniformly scaled. Patent radii, axial thicknesses, refractive indices, Abbe values, variable spacings, and aspheric coefficients are retained at source scale. The modeled infinity endpoint EFLs are 18.466857655 and 193.789739921 mm, while the separate marketing field remains 18–200 mm.

The patent publishes no clear-aperture or semi-diameter table. All surface semi-diameters in the data file are therefore modeling inferences derived from the verified ray envelopes, measured Figure 1 proportions, and mechanical constraints. The front cemented pair and following meniscus were tightened to 27.5/25.3 mm and 26.0/25.1 mm surface envelopes, respectively, so their rendered silhouette follows Figure 1 and remains plausible inside the production lens's 62 mm filter thread. The physical stop location is published, but its radius is not: `STO.sd = 7.31 mm` is an inferred maximum clear stop radius consistent with the patent's infinity-focus F-number plots. No sensor cover glass, filter, inactive dummy plane, flare-cutter plane, or mechanical component is included.

## Optical Architecture

Embodiment 1 is a five-functional-group positive-lead zoom with the power sequence

$$
G1(+)\;\rightarrow\;G2(-)\;\rightarrow\;STO\;\rightarrow\;G3(+)\;\rightarrow\;G4(-)\;\rightarrow\;G5(+).
$$

The patent places the aperture stop immediately in front of G3. The diagram now preserves Figure 1's G3A, G3B, and G3C subgroup tags: G3B is the transverse anti-vibration L10+L11 subset. G4 is the internal focusing group. During zooming, G3 and G5 move by the same axial displacement, allowing the patent to describe them as sharing a common cam structure.[1]

The 17 physical lens pieces are represented by 19 optical-media entries in the data file because two patent-described bonded resin layers remain active media: L4r on the object side of L4 and L15r on the image side of L15. This modeling split does not change the physical `elementCount`, which remains 17.

Independent isolated-group calculations give the following first-order powers. These values describe each functional group removed from the complete system while retaining its internal thicknesses; they are not the in-situ power contribution of a group inside the assembled zoom.

| Functional group | Physical content | Isolated group EFL | Power sign | Principal function |
|---|---|---:|:---:|---|
| G1 | L1–L3 | +106.2329 mm | + | Front positive collector |
| G2 | L4–L7 | −14.8733 mm | − | Primary negative variator |
| G3 | L8–L13 | +19.6263 mm | + | Positive relay; contains IS subset |
| G4 | L14–L15 + L15r | −26.2640 mm | − | Internal focusing group |
| G5 | L16–L17 | +157.2930 mm | + | Rear positive group |

The zoom kinematics reproduce the patent's same-cam condition numerically. Relative to the fixed image plane, the G3 and G5 first surfaces each move 21.7486 mm objectward from wide to intermediate and a further 13.4531 mm objectward from intermediate to tele. The G3-to-G4 spacing is largest at the intermediate state, as described by the patent.[1]

The strict project definitions do not justify calling the entire design “telephoto” or “retrofocus.” Using total track divided by EFL, only the tele endpoint satisfies `TL/EFL < 1` (0.97945); the wide and intermediate states do not. No modeled state has back focal distance greater than EFL, so none satisfies the project's retrofocus criterion.

The aperture model deliberately separates marketing from design. Sony markets a variable maximum aperture of f/3.5–6.3.[2] The model uses the patent's infinity aberration-plot values `[3.57, 5.60, 6.47]` at the three zoom control points. The patent headline gives f/3.58 at the wide end while Fig. 2A gives f/3.57; the data preserves the plotted infinity value rather than silently reconciling the one-hundredth discrepancy.[1]

## Element-by-Element Analysis

All focal lengths in the element headings are **standalone isolated-air element values** carried by the final data file. Cemented-net and functional-group powers are stated separately where useful; they should not be interpreted as the same quantity.

### L1 — Negative Meniscus

`nd = 1.90366`, `νd = 31.31`. Glass: **N-LASF46B catalog equivalent (SCHOTT; production supplier unspecified)**. Standalone $f=-168.6919$ mm.

L1 is the negative front member of the cemented L1+L2 pair in G1. Its object-side surface is convex toward the object, matching the patent description of the first member as a negative meniscus.[1] In isolation it is negative, but its cemented partnership with L2 produces a weak net positive unit.

### L2 — Biconvex Positive

`nd = 1.49700`, `νd = 81.61`. Glass: **H-FK61 catalog equivalent (CDGM; production supplier unspecified)**. Standalone $f=+124.3212$ mm.

L2 is the positive high-Abbe member cemented directly to L1. The isolated L1+L2 cemented pair has computed EFL $+473.7514$ mm, so the pair is weakly positive despite L1's negative standalone power. Sony specifies two ED elements in the production lens; the patent coordinate and ED-class catalog match identify L2 as one of the two correlated positions. The `apd: "inferred"` tag records that production-count inference without inventing partial-dispersion data or claiming apochromatic correction.

### L3 — Positive Meniscus

`nd = 1.61800`, `νd = 63.39`. Glass: **S-PHM52 catalog equivalent (OHARA; production supplier unspecified)**. Standalone $f=+135.9941$ mm.

L3 is the rear positive meniscus of G1. Together with the L1+L2 cemented pair it establishes the positive sign of the complete front group. G1's isolated EFL is $+106.2329$ mm.

### L4r + L4 — Hybrid Negative Meniscus

**L4r resin:** `nd = 1.51460`, `νd = 49.96`. Glass: **Unmatched (optical resin layer; vendor not identified)**. Standalone $f=-356.7079$ mm.\
**L4 substrate:** `nd = 1.90366`, `νd = 31.31`. Glass: **N-LASF46B catalog equivalent (SCHOTT; production supplier unspecified)**. Standalone $f=-20.0544$ mm.

The patent describes L4 as a composite aspherical negative meniscus with a resin layer superposed on its object-side glass surface.[1] The data therefore keeps the resin and glass as separate active optical media rather than collapsing the layer into the substrate. The complete physical L4 composite has independently computed isolated EFL $-18.9588$ mm.

The resin's outer surface is `6A`, the first aspheric surface in the prescription. L4 begins the negative G2 variator, where its strong negative composite power contributes directly to the functional group's $-14.8733$ mm isolated EFL.

### L5 — Biconcave Negative

`nd = 1.83481`, `νd = 42.72`. Glass: **S-LAH55 catalog equivalent (OHARA; production supplier unspecified)**. Standalone $f=-23.8579$ mm.

L5 is a biconcave negative member of G2. It follows the hybrid L4 composite and adds substantial negative power inside the primary variator group.

### L6 — Biconvex Positive

`nd = 1.92286`, `νd = 20.88`. Glass: **N-SF66 catalog equivalent (SCHOTT; production supplier unspecified)**. Standalone $f=+20.3635$ mm.

L6 is a strong positive element embedded inside the otherwise negative G2 group. Its unusually high index and low Abbe number place positive refractive power and strong dispersion leverage between negative neighbors. The exact aberration balance is a property of the assembled group; the standalone focal length should not be read as its in-situ contribution.

### L7 — Negative Meniscus

`nd = 1.83481`, `νd = 42.72`. Glass: **S-LAH55 catalog equivalent (OHARA; production supplier unspecified)**. Standalone $f=-47.6566$ mm.

L7 is the rear negative meniscus of G2. The air gap after L7 is the zoom-variable `D14` spacing to the aperture stop. It decreases from 25.4255 mm at wide angle to 1.7000 mm at telephoto, bringing the negative variator close to the stop as the zoom advances.

### L8 — Biconvex Positive, Bi-Aspheric

`nd = 1.61881`, `νd = 63.85`. Glass: **M-PCD4 catalog equivalent (OHARA; production supplier unspecified)**. Standalone $f=+22.1401$ mm.

L8 is the first element of positive G3 and is glass-molded with both major surfaces aspheric (`16A` and `17A`). The patent specifically states that an aspheric positive lens at the front of G3 helps compensate spherical and comatic aberration generated principally by G1 and G2.[1]

Because the stop is immediately in front of L8, this element operates near the aperture and is the most directly stop-adjacent powered member of G3. The two aspheric surfaces permit independent control of the front and rear surface profiles without introducing an additional optical medium.

### L9 — Negative Meniscus

`nd = 1.77250`, `νd = 49.62`. Glass: **J-LASF016 catalog equivalent (HIKARI; production supplier unspecified)**. Standalone $f=-66.6362$ mm.

L9 is the negative meniscus following L8 within G3. It separates the front bi-aspheric positive element from the stabilized cemented pair and contributes negative balancing power inside a group that remains positive as a whole.

### L10 — Biconvex Positive Asphere

`nd = 1.59201`, `νd = 67.02`. Glass: **M-PCD51 catalog equivalent (OHARA; production supplier unspecified)**. Standalone $f=+24.9228$ mm.

L10 is the positive member of the cemented L10+L11 stabilization pair. Its object-side surface `20A` is a glass-molded asphere.[1] The patent identifies this composite pair as the lens subset that moves orthogonally to the optical axis for anti-vibration correction.

### L11 — Negative Meniscus

`nd = 1.84666`, `νd = 23.78`. Glass: **J-SF03 catalog equivalent (HIKARI; production supplier unspecified)**. Standalone $f=-80.7274$ mm.

L11 is cemented to L10 and moves transversely with it as one stabilization subset. The isolated cemented pair has EFL $+35.9234$ mm, distinct from either constituent's standalone focal length. The high dispersion contrast between L10 ($νd=67.02$) and L11 ($νd=23.78$) also gives the pair chromatic balancing leverage, although the available data do not support an apochromatic claim.

### L12 — Negative Meniscus

`nd = 1.90366`, `νd = 31.31`. Glass: **N-LASF46B catalog equivalent (SCHOTT; production supplier unspecified)**. Standalone $f=-17.3390$ mm.

L12 is the negative front member of the rear cemented pair in G3. It is one of three physical lens pieces in the model using the 1.90366 / 31.31 coordinate class.

### L13 — Biconvex Positive

`nd = 1.51742`, `νd = 52.15`. Glass: **E-CF6 catalog equivalent (HOYA; production supplier unspecified)**. Standalone $f=+17.6091$ mm.

L13 is cemented to L12 and closes G3. Although the two standalone powers are of nearly equal magnitude and opposite sign, the finite thickness and cemented interface leave the L12+L13 compound weakly positive, with independently computed EFL $+321.7070$ mm.

### L14 — Positive Meniscus

`nd = 1.72825`, `νd = 28.32`. Glass: **H-ZF4A catalog equivalent (CDGM; production supplier unspecified)**. Standalone $f=+28.1351$ mm.

L14 is the positive front member of G4, the patent's focusing group. It is cemented directly to L15. The patent describes L14 as a positive meniscus with its convex side toward the image plane.[1]

### L15 + L15r — Hybrid Biconcave Negative Asphere

**L15 glass:** `nd = 1.69680`, `νd = 55.46`. Glass: **J-LAK14 catalog equivalent (HIKARI; production supplier unspecified)**. Standalone $f=-13.1075$ mm.\
**L15r resin:** `nd = 1.51460`, `νd = 49.96`. Glass: **Unmatched (optical resin layer; vendor not identified)**. Standalone $f=+435.5657$ mm.

L15 is the strong negative member of G4. The patent describes a bonded image-side resin layer whose outer surface is aspheric; the data retains that layer as L15r, with `29A` as the air-facing asphere.[1]

The physical L15 glass-plus-resin composite has independently computed isolated EFL $-13.4551$ mm. When combined with L14 at the cemented interface, the complete G4 assembly has EFL $-26.2640$ mm. This complete negative compound, rather than the individual L14 or L15 powers, is the translating focusing group.

### L16 — Biconvex Positive

`nd = 1.48749`, `νd = 70.44`. Glass: **N-FK5 catalog equivalent (SCHOTT; production supplier unspecified)**. Standalone $f=+30.3978$ mm.

L16 is the positive front member of G5. Its high Abbe number and catalog match identify it as the second production-count-correlated ED position, recorded as `apd: "inferred"`; the patent still provides no partial-dispersion value. G5 moves axially by the same amount as G3 during zooming but does not participate in the published focus motion.

### L17 — Negative Meniscus

`nd = 1.83481`, `νd = 42.72`. Glass: **S-LAH55 catalog equivalent (OHARA; production supplier unspecified)**. Standalone $f=-34.6940$ mm.

L17 is the rear negative meniscus and final physical lens piece. Together with L16 it leaves G5 weakly positive overall; the isolated two-element group has EFL $+157.2930$ mm. The back-focus spacing after L17 is zoom-variable but unchanged between infinity and the published 0.5 m focus state at a given zoom position.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number. It does not identify glass vendors, catalog names, C/F/g-line indices, partial-dispersion ratios, or anomalous-partial-dispersion deviations.[1] The catalog audit nevertheless found a compatible existing Sellmeier curve for every physical glass medium. The data names those resolver-selected equivalents while preserving each patent coordinate and explicitly leaving the production supplier unspecified. The two bonded resin layers remain `Unmatched` because their unpublished chemistry cannot be backfilled defensibly.

| Catalog equivalent | nd | νd | Physical pieces / media | Data-level interpretation |
|---|---:|---:|---|---|
| N-LASF46B (SCHOTT), patent class 904313 | 1.90366 | 31.31 | L1, L4, L12 | High-index, lower-Abbe negative/correcting members |
| H-FK61 (CDGM), patent class 497816 | 1.49700 | 81.61 | L2 | Production-count-correlated ED position |
| S-PHM52 (OHARA), patent class 618634 | 1.61800 | 63.39 | L3 | Positive crown-class member |
| Unmatched optical resin layer | 1.51460 | 49.96 | L4r, L15r | Patent-described bonded hybrid-asphere media |
| S-LAH55 (OHARA), patent class 835427 | 1.83481 | 42.72 | L5, L7, L17 | Repeated high-index negative members |
| N-SF66 (SCHOTT), patent class 923209 | 1.92286 | 20.88 | L6 | Very high-index, low-Abbe positive member in G2 |
| M-PCD4 (OHARA), patent class 619639 | 1.61881 | 63.85 | L8 | Glass-molded bi-asphere |
| J-LASF016 (HIKARI), patent class 773496 | 1.77250 | 49.62 | L9 | Negative G3 member |
| M-PCD51 (OHARA), patent class 592670 | 1.59201 | 67.02 | L10 | Glass-molded aspheric positive IS member |
| J-SF03 (HIKARI), patent class 847238 | 1.84666 | 23.78 | L11 | Negative cemented IS partner |
| E-CF6 (HOYA), patent class 517522 | 1.51742 | 52.15 | L13 | Positive rear member of G3 cemented pair |
| H-ZF4A (CDGM), patent class 728283 | 1.72825 | 28.32 | L14 | Positive front member of negative focus group |
| J-LAK14 (HIKARI), patent class 697555 | 1.69680 | 55.46 | L15 | Strong negative focus-group member |
| N-FK5 (SCHOTT), patent class 487704 | 1.48749 | 70.44 | L16 | Production-count-correlated ED position |

The glass audit compared these coordinates against current OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA catalog resources.[4–9] Some coordinates have very close or exact cross-vendor alternatives, so the named entries are catalog equivalents rather than supplier claims. Coverage is complete for all 17 physical glass media; only L4r and L15r remain unresolved.

The broad chromatic strategy pairs high-Abbe positive members such as L2 ($νd=81.61$), L10 ($νd=67.02$), and L16 ($νd=70.44$) with high-index, lower-Abbe members such as L1/L4/L12 ($νd=31.31$), L6 ($νd=20.88$), and L11 ($νd=23.78$). Sony's two-ED production count and the patent topology support inferred ED tags on L2 and L16. That positional inference does **not** establish apochromatic correction or authorize a patent `dPgF` value.

Accordingly, the data file intentionally contains no patent-authored `nC`, `nF`, `ng`, or `dPgF` fields. Catalog Sellmeier curves provide complete spectral rendering for the identified physical glasses, but no secondary-spectrum or APO claim is made from `nd` and `νd` alone.

## Focus Mechanism

The model uses a **published internal-focus mechanism**, not a reconstruction. Embodiment 1 directly tabulates infinity and 0.5 m states at all three zoom positions. G4—the cemented L14+L15 assembly with the rear bonded resin layer—moves toward the image plane as focus is brought closer.[1]

Only the air gaps on either side of G4 change with focus: `D25` before the group and `D29` after it. Their sum remains essentially constant at each zoom position, demonstrating translation of one rigid focusing group between fixed neighboring groups.

| Zoom control point | D25 infinity | D25 at 0.5 m | D29 infinity | D29 at 0.5 m | G4 imageward travel |
|---|---:|---:|---:|---:|---:|
| Wide | 1.4000 mm | 1.6487 mm | 9.5946 mm | 9.3459 mm | 0.2487 mm |
| Intermediate | 4.7187 mm | 6.5210 mm | 6.2759 mm | 4.4736 mm | 1.8023 mm |
| Tele | 1.4999 mm | 9.1651 mm | 9.4947 mm | 1.8296 mm | 7.6652 mm |

At wide and intermediate, `D25 + D29 = 10.9946 mm` at both focus states. At tele the sum is 10.9946 mm at infinity and 10.9947 mm at 0.5 m; the 0.0001 mm difference is consistent with source-table rounding.

Independent first-order tracing of the published close states gives the following conjugates:

| Zoom control point | Published close-state f | Recomputed EFL | Sensor-plane object distance | Paraxial magnification |
|---|---:|---:|---:|---:|
| Wide | 18.1576 mm | 18.157315428 mm | 500.0009 mm | −0.0449598× |
| Intermediate | 60.2317 mm | 60.230636774 mm | 500.0012 mm | −0.1602556× |
| Tele | 105.9540 mm | 105.952673292 mm | 500.0047 mm | −0.3491566× |

The telephoto control point therefore undergoes substantial focal shortening at 0.5 m while reaching approximately 0.35× paraxial magnification. That result is higher than SEL18200LE's specified 0.27× maximum magnification and is retained as a correlation caveat rather than normalized to the product specification.[2]

SEL18200LE is marketed with a 0.5 m minimum-focus distance.[2] The patent table publishes that same object distance at all three zoom control points, so the model sets `closeFocusM = 0.5` without reconstructing an unsupported production state.

The patent describes G4's optical motion but does not establish the production actuator technology used to translate that group. No motor type or drive-travel claim is therefore assigned to the optical model.

## Aspherical Surfaces

Embodiment 1 contains five aspheric surfaces on four physical lens pieces:

- `6A`: outer object-side resin surface on the L4 hybrid composite;
- `16A` and `17A`: both major surfaces of glass-molded L8;
- `20A`: object-side surface of glass-molded L10 in the IS subset;
- `29A`: outer image-side resin surface on the L15 hybrid composite.[1]

The patent defines the sag as

$$
x=\frac{H^2/r}{1+\sqrt{1-(1+K)(H/r)^2}}+A_4H^4+A_6H^6+A_8H^8+A_{10}H^{10}.
$$

Its published coefficient `k` is therefore already the standard conic constant $K$ used by the data model; no $\kappa\rightarrow K$ conversion is applied. The patent table stops at $A_{10}$; no higher-order coefficient is published, and all higher-order terms are zero in the model.

| Surface | Physical location | K | A4 | A6 | A8 | A10 |
|---|---|---:|---:|---:|---:|---:|
| `6A` | L4 front resin | 0 | +2.00246E−05 | −4.07575E−08 | +1.35108E−10 | +2.54007E−13 |
| `16A` | L8 front | −1.6765 | +1.73663E−05 | −1.78587E−09 | +1.55565E−09 | +5.28154E−12 |
| `17A` | L8 rear | 0 | +4.00586E−05 | −8.57830E−08 | +2.49011E−09 | −1.89872E−13 |
| `20A` | L10 front | 0 | −1.59299E−05 | +4.84995E−08 | −1.30605E−09 | +9.03492E−12 |
| `29A` | L15 rear resin | 0 | −2.10416E−05 | +1.08897E−07 | −6.52540E−09 | +5.29800E−11 |

The sign of the polynomial departure varies across the design: the leading terms on `6A`, `16A`, and `17A` increase sag relative to their conic bases near the axis, whereas `20A` and `29A` begin with negative fourth-order departures. The full profile depends on all terms and the conic base; these signs should not be reduced to a single aberration label.

At the final inferred semi-diameters used for rendering and ray containment, the independently evaluated polynomial departures from the conic base are:

| Surface | Inferred semi-diameter | Polynomial departure from conic |
|---|---:|---:|
| `6A` | 11.8 mm | +0.342285 mm |
| `16A` | 9.5 mm | +0.274964 mm |
| `17A` | 9.5 mm | +0.427284 mm |
| `20A` | 9.0 mm | −0.103460 mm |
| `29A` | 6.8 mm | −0.052856 mm |

These departure values are **model evaluations at inferred apertures**, not patent-authored clear-aperture data. The patent publishes no semi-diameters.

Manufacturing treatment is explicit for the principal aspheres. L8 is a glass-molded bi-aspheric lens; L10 is a glass-molded aspheric lens; L4 and L15 use bonded resin composite aspheres.[1] The patent specifically ties the G3 front asphere and the aspheric surface in the transverse stabilization subset to control of spherical/comatic behavior.[1]

Sony's current product page describes four aspheric lens elements.[2] The selected patent likewise has four physical aspheric lens pieces but tabulates five aspheric surfaces because L8 is bi-aspheric. The data therefore preserves both the production piece count and the patent surface count.

## Image Stabilization

Within G3, L10 and L11 form a cemented positive/negative subset. Embodiment 1 moves this pair approximately perpendicular to the optical axis to shift the image in opposition to camera shake.[1] The pair's isolated cemented EFL is $+35.9234$ mm, but this is a standalone compound value; stabilization behavior depends on its in-situ location inside G3.

The patent places an asphere on the object-side surface of L10 (`20A`) and states that this arrangement helps control changes in spherical and comatic aberration when the stabilization subset is displaced.[1] No numerical decenter range is published for Embodiment 1, so the analysis does not assign one.

Sony specifies Optical SteadyShot for SEL18200LE.[2] That product feature is consistent with the selected patent's transverse anti-vibration subset, but it is not treated as manufacturer confirmation that the production actuator or exact decenter law is identical to the patent embodiment.

## Verification Summary

Independent tracing of the final prescription used sequential height/reduced-angle propagation and an ABCD matrix cross-check. The two first-order implementations agree to floating-point precision.

At infinity focus, the patent focal lengths and independently recomputed Gaussian values are:

| State | Patent f | Recomputed EFL | Patent BF | Recomputed BFL |
|---|---:|---:|---:|---:|
| Wide | 18.4671 mm | 18.466857655 mm | 18.3076 mm | 18.307157260 mm |
| Intermediate | 69.9995 mm | 69.998017887 mm | 40.0562 mm | 40.054868313 mm |
| Tele | 193.7966 mm | 193.789739921 mm | 53.5093 mm | 53.505914399 mm |

The residuals are small compared with the source's four-decimal prescription precision. The endpoint recomputed EFLs are the values stored in `focalLengthDesign`; the separate marketed range remains 18–200 mm.

The surface-by-surface Petzval sum, computed as $\phi/(n n')$ at each refracting surface, is

$$
P=+0.001748494479712\;\mathrm{mm}^{-1}.
$$

Under the reporting convention $R_P=-1/P$, the equivalent Petzval radius is $-571.920593$ mm. This is a computed first-order result rather than a patent-published quantity.

The inferred aperture geometry was checked in all six authored zoom/focus states after the Figure 1 front-group correction. The resulting model satisfies the project's edge-thickness, rim-slope, shared-gap, image-circle, and sampled-ray checks, but the semi-diameters themselves remain inferred rather than source-authored.

No patent prescription quantity is optically altered; the prescription follows the patent table on p. 8. No uniform scale or asphere coefficient transformation is applied.

## Sources and References

1. Yamanaka, Hisayuki; Kanai, Makoto; Sueyoshi, Masafumi; Hosoi, Masaharu. **US 8,553,339 B2, “Enhanced Variable Power Zoom Lens.”** Granted October 8, 2013. Embodiment 1 / Example 1; especially Fig. 1, Figs. 2A–4B, and patent pp. 7–9.
2. Sony. **SEL18200LE — E 18–200mm F3.5–6.3 OSS LE, Specifications.** Official Sony support specification. https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel18200le/specifications
3. Sony. **SEL18200 — E 18–200mm F3.5–6.3 OSS, Specifications.** Official Sony support specification used to distinguish the original 12-group model. https://www.sony.com/electronics/support/lenses-e-mount-lenses/sel18200/specifications
4. OHARA Inc. **Optical Glass Types / Comparative Tables.** https://www.ohara-inc.co.jp/en/product/01000/ and https://www.ohara-inc.co.jp/en/product/01002/
5. HOYA Corporation. **Optical Glass Data / Cross Reference.** https://www.hoya-opticalworld.com/english/datadownload/ and https://www.hoyaoptics.eu/glass-cross-reference-index
6. SCHOTT Advanced Optics. **Optical Glass Catalog / Datasheets.** https://www.schott.com/shop/advanced-optics/en/Optical-Glass/
7. HIKARI Glass Co., Ltd. **Optical Glass Catalog.** https://www.hikari-g.co.jp/optical_glass/catalog/
8. Chengdu Guangming (CDGM). **Optical Glass Database.** https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
9. SUMITA Optical Glass, Inc. **Optical Glass Data Book / Downloads.** https://www.sumita-opt.co.jp/en/download/
