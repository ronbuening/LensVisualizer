## Patent Reference and Design Identification

**Patent:** US 2003/0133200 A1
**Application Number:** 10/244,406
**Priority:** September 19, 2001; May 27, 2002
**Filed:** September 17, 2002
**Published:** July 17, 2003
**Inventor:** Susumu Sato
**Assignee:** Nikon Corporation
**Title:** Zoom Lens System
**Embodiment analyzed:** Example 1

The modeled prescription is Example 1 of the first embodiment in US 2003/0133200 A1. The patent describes a four-power-group large-aperture internal-focusing zoom with axial motion of G2 and G3, axial focusing by the rear portion of G1, and transverse vibration-reduction motion within G4 (¶¶0092–0108). Example 1 then specifies the 21-element prescription, its cemented relationships, the three zoom stations, the close-focus state, and the vibration-reduction offsets (¶¶0109–0114).

The project treats this example as the fixed production correlation for the **NIKON AF-S VR ZOOM-NIKKOR 70-200mm f/2.8G IF-ED**. That correlation is supported by convergent evidence rather than an explicit Nikon statement tying the commercial lens to this patent:

1. Nikon specifies the production lens as a 70–200 mm f/2.8 Nikon F-mount lens for FX/35 mm with 21 elements in 15 groups, five ED elements, VR, AF-S, internal focusing, and a 1.5 m minimum focus distance.
2. Example 1 contains 21 elements in 15 air-separated groups, a design focal range of approximately 71.4–196.0 mm at f/2.88, five occurrences of the same very-low-dispersion coordinate pair `nd = 1.497820, νd = 82.52`, axial internal focusing, transverse vibration reduction, and a published closest-focus condition of 1500 mm.
3. Nikon's product history places the AF-S VR Zoom-Nikkor 70-200mm f/2.8G IF-ED in 2003, consistent with the publication timing of the selected patent.

Marketing and design quantities are therefore kept separate. The production specification is 70–200 mm f/2.8; the modeled prescription computes 71.399889–195.999982 mm and uses f/2.88 for the stop/pupil model. The source itself contains one important contradiction: the Example 1 specification and variable-distance table print a telephoto label of 194.0000 mm, while the same Example 1 conditional-value block gives `FT = 196.0000`, and independent tracing of the published spacings gives 195.999982 mm. The data file consequently uses 196 mm as the tele zoom control point and retains 194 mm only as the erroneous raw source label.

No scale factor is applied. All radii, axial spacings, image-plane coordinates, and element focal lengths remain at patent scale. Example 1 is entirely spherical, so there is no asphere equation, conic conversion, or coefficient transformation.

Two source field-stop planes are intentionally omitted from the ordinary sequential model. Patent S2 at source surface 28 and S3 at source surface 34 are plane air/air field-stop bookkeeping planes with no published aperture diameter and no refractive power. Their axial air lengths are folded into the surrounding gaps, giving 20.6216 mm from source surface 27 to source surface 29 and 6.6784 mm from source surface 33 to source surface 35. This preserves the powered-surface axial stations and paraxial system matrix.

The aperture-stop position itself is not inferred: S1 is explicitly published immediately before L41. Its physical diameter is not published. The data file therefore uses the independently solved common stop semi-diameter of 18.33612184 mm, which reproduces f/2.88 at all three infinity-focus zoom stations. Per-surface clear semi-diameters are likewise modeling quantities except where the patent gives the G4F and G4M maximum effective diameters. They were constrained from the published image height, stop solution, ray envelopes, group-diameter limits, and mechanical context rather than presented as patent values.

## Optical Architecture

The source calls Example 1 a large-aperture internal-focusing telephoto zoom. In this analysis that wording is retained as the patent's category description; it is not used as a separate claim under LensVisualizer's strict `TL/EFL < 1` telephoto criterion.

The design is a four-main-group positive–negative–positive–positive zoom. The 21 physical elements form 15 air-separated groups because six pairs are cemented. The patent's four main power groups are subdivided functionally into seven modeled sections:

| Section | Contents | Axial role | Verified in-situ focal length |
|---|---|---|---:|
| G1F | L11–L13 | Fixed front portion of G1 | +235.267695 mm |
| G1R | L14–L15 | Internal-focus portion of G1 | +151.804901 mm |
| G2 | L21–L24 | Negative zoom group | -28.845226 mm |
| G3 | L31–L33 | Positive zoom group | +89.465877 mm |
| G4F | L41–L43 | Fixed positive front section of G4 | +94.916996 mm |
| G4M | L44–L46 | Negative transverse VR section | -46.944756 mm |
| G4R | L47–L49 | Positive rear section of G4 | +55.916490 mm |

These are in-situ group-matrix powers bounded by air, not sums of the standalone element focal lengths. The complete G1 has a verified focal length of +99.116276 mm, while the complete G4 is +110.842560 mm.

Zooming is produced by G2 and G3 while G1 and G4 retain their overall axial stations relative to the image plane. In the infinity-focus states, the start of G2 moves monotonically imageward from 49.30264 to 63.84499 to 77.93089 mm from the first surface. G3 does not move monotonically: its start shifts from 104.60343 to 110.38042 mm and then returns to 101.13065 mm at the tele station. The authored middle station is therefore essential; a two-endpoint interpolation would miss the published reversal. The associated D21 spacing follows the same reversal, 7.92945 → 2.15247 → 11.40223 mm.

The aperture stop lies inside G4F, one millimeter ahead of L41. G4 then acts as a fixed rear master group in the axial zoom model, while its negative middle section G4M is the vibration-reduction group when shifted transversely. The centered data prescription represents the nominal optical axis; the published VR decenter states are described separately below rather than encoded as axial `var` motion.

## Element-by-Element Analysis

### G1F — fixed front section

G1F contains the front cemented pair L11+L12 followed by the air-spaced positive meniscus L13. Its verified in-situ focal length is +235.267695 mm. The front pair is net negative even though its rear member is strongly positive; L13 then contributes additional positive power in very-low-dispersion glass.

#### L11 — Negative Meniscus

`nd = 1.804000, νd = 46.58.` Glass: **804466 — vendor unresolved**. Standalone `f = -161.067102 mm`.

L11 is the front negative member of the cemented L11+L12 pair. Its high index and moderate Abbe number contrast with the lower-index, much higher-`νd` material of L12. The pair is not a simple positive achromat: its independently computed air-boundary focal length is **-731.329676 mm**, so the cemented unit remains weakly negative as a whole.

#### L12 — Positive Meniscus

`nd = 1.497820, νd = 82.52.` Glass: **J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)**. Standalone `f = +200.898822 mm`.

L12 is cemented directly to L11 and is the positive member of that pair. The same `1.497820 / 82.52` coordinate pair recurs five times in the prescription. The data file identifies it only at class level; no vendor-specific catalog melt is asserted.

#### L13 — Positive Meniscus

`nd = 1.497820, νd = 82.52.` Glass: **J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)**. Standalone `f = +175.079340 mm`.

L13 is air-spaced behind the cemented pair and supplies positive power using the same low-dispersion coordinate class as L12. This places two of the five low-dispersion elements in the fixed front section rather than concentrating them in a single rear correction group.

### G1R — internal-focus section

G1R consists of the air-spaced L14 and L15 menisci and has a verified in-situ focal length of +151.804901 mm. The patent explicitly assigns this rear portion of G1 to focusing (¶0108). Its background discussion also explains the design motivation for a two-element focus group rather than a single positive lens: the pair permits spherical-aberration variation during focusing to be controlled while keeping the moving group relatively compact (¶¶0011–0013).

#### L14 — Negative Meniscus

`nd = 1.846660, νd = 23.78.` Glass: **847238 — vendor unresolved**. Standalone `f = -320.145335 mm`.

L14 is the negative front member of the moving G1R focus section. It is one of three uses of the high-index, low-Abbe `847238` coordinate class. Its weak standalone negative power is paired with the much stronger positive L15 rather than cemented to it.

#### L15 — Positive Meniscus

`nd = 1.640000, νd = 60.09.` Glass: **S-BSM81 catalog equivalent (patent 640601; production supplier unspecified)**. Standalone `f = +102.225052 mm`.

L15 is the positive rear member of G1R and provides most of the positive standalone power within the focusing pair. The axial air gap between L14 and L15 is retained as a real gap; it is not a cemented doublet. The data's clear-aperture model for this gap requires the disclosed `gapSagFrac = 0.93` geometry policy, but the two spherical rims retain positive physical clearance.

### G2 — negative zoom group

G2 is the strongest main group by magnitude, with a verified in-situ focal length of **-28.845226 mm**. It contains two air-spaced negative singlets around the cemented L22+L23 pair. Its axial motion is monotonic across the three authored zoom stations.

#### L21 — Biconcave Negative

`nd = 1.741000, νd = 52.67.` Glass: **741527 — vendor unresolved**. Standalone `f = -44.931332 mm`.

L21 is the leading strong negative element of G2. The `741527` class appears repeatedly in later negative and positive elements, but the data does not assign a vendor-specific catalog identity.

#### L22 — Biconcave Negative

`nd = 1.487490, νd = 70.41.` Glass: **487704 — vendor unresolved**. Standalone `f = -49.113407 mm`.

L22 is the negative front member of the cemented L22+L23 pair. Despite L22's standalone negative power, the complete cemented pair is net positive because of the stronger positive L23.

#### L23 — Biconvex Positive

`nd = 1.805180, νd = 25.43.` Glass: **805254 — vendor unresolved**. Standalone `f = +42.123647 mm`.

L23 is the high-index positive member of the L22+L23 cemented pair. The independently computed net focal length of the pair is **+257.084862 mm**. That net quantity is distinct from either member's standalone focal length and from the negative in-situ power of the complete G2 group.

#### L24 — Biconcave Negative

`nd = 1.804400, νd = 39.59.` Glass: **804396 — vendor unresolved**. Standalone `f = -74.624680 mm`.

L24 closes G2 with additional negative power. It is air-spaced from the cemented pair and uses a different high-index glass coordinate from both L21 and L23.

### G3 — positive reversing zoom group

G3 has a verified in-situ focal length of **+89.465877 mm** and is the zoom group whose axial trajectory reverses after the middle station. It contains a positive low-dispersion meniscus followed by a net-positive cemented pair.

#### L31 — Positive Meniscus

`nd = 1.497820, νd = 82.52.` Glass: **J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)**. Standalone `f = +168.000836 mm`.

L31 is the leading positive element of G3 and the third occurrence of the `498825` low-dispersion class. Its placement makes the low-dispersion material part of the moving positive zoom group rather than only the fixed front group.

#### L32 — Biconvex Positive

`nd = 1.497820, νd = 82.52.` Glass: **J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)**. Standalone `f = +65.510633 mm`.

L32 is the stronger positive member of the L32+L33 cemented pair and the fourth `498825` element. It is cemented directly to the negative L33.

#### L33 — Negative Meniscus

`nd = 1.741000, νd = 52.67.` Glass: **741527 — vendor unresolved**. Standalone `f = -97.904609 mm`.

L33 is the negative member of the L32+L33 pair. The cemented pair remains net positive, with a verified air-boundary focal length of **+190.361318 mm**. This net power should not be confused with the stronger +89.465877 mm in-situ power of the whole G3 section.

### G4F — fixed positive front section of G4

G4F begins at the published aperture stop and contains the L41+L42 cemented pair followed by L43. Its verified in-situ focal length is **+94.916996 mm**. The patent gives a maximum effective diameter of 37.4 mm for this section; the data's maximum authored G4F diameter is kept at that published value.

#### L41 — Negative Meniscus

`nd = 1.805180, νd = 25.43.` Glass: **805254 — vendor unresolved**. Standalone `f = -90.941473 mm`.

L41 is the negative front member of the cemented L41+L42 pair immediately behind the stop. Its glass coordinates match L23, but the data retains only the common unresolved coordinate class rather than inferring a specific melt.

#### L42 — Biconvex Positive

`nd = 1.696800, νd = 55.52.` Glass: **697555 — vendor unresolved**. Standalone `f = +56.837363 mm`.

L42 is the positive member of the L41+L42 pair. The cemented pair has a verified net air-boundary focal length of **+152.416007 mm**, so it is weakly positive as a unit despite the negative front member.

#### L43 — Positive Meniscus

`nd = 1.603000, νd = 65.47.` Glass: **603655 — vendor unresolved**. Standalone `f = +248.418099 mm`.

L43 is the rear positive meniscus of G4F. Its standalone power is modest relative to L42, but together with the cemented pair it completes the positive G4F subgroup before the wide air space leading to G4M.

### G4M — transverse vibration-reduction section

G4M is the negative middle section of G4 and has a verified in-situ focal length of **-46.944756 mm**. The patent shifts this entire three-element section perpendicular to the optical axis to move the image for vibration reduction (¶¶0092, 0107, 0109). The patent gives a maximum effective diameter of 30.4 mm for G4M; the data retains that maximum.

#### L44 — Biconvex Positive

`nd = 1.846660, νd = 23.78.` Glass: **847238 — vendor unresolved**. Standalone `f = +59.499523 mm`.

L44 is the positive front member of the cemented L44+L45 pair. It uses the same high-index, low-Abbe coordinate class as L14 and L49.

#### L45 — Biconcave Negative

`nd = 1.741000, νd = 52.67.` Glass: **741527 — vendor unresolved**. Standalone `f = -36.008011 mm`.

L45 is the strong negative member of the cemented pair. The L44+L45 unit is net negative, with a verified air-boundary focal length of **-94.145577 mm**.

#### L46 — Biconcave Negative

`nd = 1.741000, νd = 52.67.` Glass: **741527 — vendor unresolved**. Standalone `f = -97.357167 mm`.

L46 is an air-spaced rear negative element. Together with the net-negative L44+L45 pair it establishes the negative power of the complete VR subgroup.

### G4R — fixed positive rear section

G4R is the final positive section and has a verified in-situ focal length of **+55.916490 mm**. It contains the fifth `498825` low-dispersion element followed by a net-positive cemented pair.

#### L47 — Positive Meniscus

`nd = 1.497820, νd = 82.52.` Glass: **J-FKH1 catalog equivalent (patent 498825; production supplier unspecified)**. Standalone `f = +135.032628 mm`.

L47 is the fifth and final occurrence of the `498825` coordinate class. Its 14.0 mm modeled semi-diameter follows the visibly smaller L47 silhouette in Figure 1 relative to the final L48/L49 pair. Its position in the rear positive section distributes the same low-dispersion material across G1F, G3, and G4R.

#### L48 — Biconvex Positive

`nd = 1.741000, νd = 52.67.` Glass: **741527 — vendor unresolved**. Standalone `f = +44.202853 mm`.

L48 is the positive member of the final cemented pair and supplies strong standalone positive power immediately ahead of L49.

#### L49 — Negative Meniscus

`nd = 1.846660, νd = 23.78.` Glass: **847238 — vendor unresolved**. Standalone `f = -78.509242 mm`.

L49 is the negative rear member of the L48+L49 pair. The cemented pair remains net positive at **+95.691842 mm**. The final surface then leaves a fixed 66.21049 mm source back-focus spacing to the image plane.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. It does not identify a glass vendor or trade name for Example 1, nor does it publish per-element `nC`, `nF`, `ng`, `PgF`, or `dPgF`. The data file retains those patent coordinates and uses compatible coefficient-backed catalog equivalents where available, without treating them as evidence of a unique production melt.

| Stored glass annotation | nd | νd | Elements | Data-level interpretation |
|---|---:|---:|---|---|
| 804466 — vendor unresolved | 1.804000 | 46.58 | L11 | High-index class; vendor unresolved |
| J-FKH1 catalog equivalent (patent 498825) | 1.497820 | 82.52 | L12, L13, L31, L32, L47 | Compatible coefficient-backed ED curve; production supplier unspecified |
| 847238 — vendor unresolved | 1.846660 | 23.78 | L14, L44, L49 | High-index, low-Abbe class |
| S-BSM81 catalog equivalent (patent 640601) | 1.640000 | 60.09 | L15 | Compatible coefficient-backed crown curve; production supplier unspecified |
| 741527 — vendor unresolved | 1.741000 | 52.67 | L21, L33, L45, L46, L48 | High-index moderate-dispersion class |
| 487704 — vendor unresolved | 1.487490 | 70.41 | L22 | Low-index, high-Abbe class |
| 805254 — vendor unresolved | 1.805180 | 25.43 | L23, L41 | Dense-flint-like coordinate class |
| 804396 — vendor unresolved | 1.804400 | 39.59 | L24 | High-index coordinate class |
| 697555 — vendor unresolved | 1.696800 | 55.52 | L42 | Lanthanum-crown-like coordinate class |
| 603655 — vendor unresolved | 1.603000 | 65.47 | L43 | High-Abbe positive-glass coordinate class |

The five `498825` elements are notable because Nikon's production specification states that the commercial lens contains five ED elements. J-FKH1 supplies a compatible public dispersion curve, but its use does not identify Nikon's historical supplier or production melt.

L12, L13, L31, L32, and L47 carry `apd: "inferred"` because their shared `498825` coordinate and count match Nikon's five-ED production specification. The tags are production-correlation metadata, not published line indices or `dPgF`; they do not establish an APO designation or quantitative secondary-spectrum behavior.

## Focus Mechanism

The focus model is **PUBLISHED**, not reconstructed. The patent divides G1 into fixed G1F and movable G1R and focuses by moving G1R along the optical axis (¶0108). In Example 1, G1R consists of L14 and L15.

From infinity to the published closest-focus condition, G1R translates **9.71956 mm toward the object** at every zoom station. The motion is encoded by equal and opposite changes in the two gaps adjacent to G1R: D5 decreases by 9.71956 mm while D9 increases by the same amount to source precision. The internal group therefore moves rigidly without changing its own element spacing.

| Zoom station | D5 infinity → close | D9 infinity → close | Patent β at close |
|---|---:|---:|---:|
| 71.4 mm | 14.15950 → 4.43994 mm | 2.52314 → 12.24271 mm | -0.06001 |
| 105 mm | 14.15950 → 4.43994 mm | 17.06549 → 26.78505 mm | -0.08825 |
| 196 mm modeled station | 14.15950 → 4.43994 mm | 31.15139 → 40.87095 mm | -0.16473 |

The patent states the closest focusing distance as `R = 1500 mm`, while Table 1 gives `D0 = 1241.9566 mm`. These quantities use different reference planes. D0 is measured from the object plane to the first optical surface; R is the object-plane-to-image-plane distance. Independent imaging traces reproduce the 1500 mm object-to-image distance and the published close-focus magnifications, resolving the apparent discrepancy without altering the prescription.

The production lens is likewise specified by Nikon as internally focusing with a 1.5 m minimum focus distance. That manufacturer specification is used as correlation evidence; the exact internal travel and β values come from the patent and independent computation, not from marketing data.

## Chromatic Correction Strategy

The prescription distributes its highest-`νd` material across three positive-power regions. Two `498825` elements occur in G1F, two in G3, and one in G4R. This arrangement makes the very-low-dispersion material participate in the fixed front collector, the moving positive zoom group, and the positive rear relay rather than confining it to one location.

Several cemented pairs deliberately combine strongly different index/dispersion coordinates: L11+L12, L22+L23, L32+L33, L41+L42, L44+L45, and L48+L49. Their independently computed net powers alternate between weak negative, weak positive, and stronger negative/positive roles depending on location. Those net pair powers are distinct from both the standalone element powers and the in-situ group powers reported above.

Because the source supplies only d-line index and Abbe number, the analysis stops at this structural description. The ED tags use the independent production count as corroboration and do not infer fluorite equivalence, a quantitative partial-dispersion value, or apochromatic correction from the high Abbe numbers alone.

## Image Stabilization

The patent identifies G4M, comprising L44–L46, as the vibration-reduction group. Image stabilization is obtained by shifting this negative subgroup perpendicular to the optical axis rather than by moving it axially (¶¶0092, 0107, 0109). The published transverse G4M shifts and the associated image-plane shifts both increase in magnitude toward the tele end.

| Focus state | Quantity | Wide | Middle | Tele |
|---|---|---:|---:|---:|
| Infinity | G4M transverse shift | 0.257 mm | 0.378 mm | 0.706 mm |
| Infinity | Image-plane shift | -0.374 mm | -0.550 mm | -1.026 mm |
| Closest | G4M transverse shift | 0.324 mm | 0.477 mm | 0.890 mm |
| Closest | Image-plane shift | -0.471 mm | -0.693 mm | -1.294 mm |

The centered LensVisualizer prescription identifies G4M as the VR group but does not encode these transverse offsets as axial focus/zoom `var` values. The values above therefore describe the published stabilization mechanism rather than an additional centered prescription state.

The subgroup power distribution is consistent with the patent's stabilization architecture: G4F is positive (+94.916996 mm), G4M is negative (-46.944756 mm), and G4R is positive (+55.916490 mm), giving the complete G4 a positive in-situ focal length of +110.842560 mm. The patent's first-embodiment conditional expressions explicitly constrain this balance.

## Conditional Expressions

The first embodiment defines four conditions governing the fourth-group power distribution, stabilization-group sizing, and tele-end group balance. Evaluating the Example 1 prescription with independently computed group powers reproduces the patent's rounded values.

| Eq. | Evaluated expression | Patent range | Verified value |
|---|---|---:|---:|
| (1) | `|(F4 × F4M) / (F4F × F4R)|` | 0.70–1.20 | 0.980414544 |
| (2) | `F4 / (F4F × F4R × Nd)` | 0.008–0.015 | 0.011757796 |
| (3) | `|(φF × F4R) / (F4 × φM)|` | 0.40–0.80 | 0.620628015 |
| (4) | `|(FT × F23T × F4M) / (F1 × F4F × F4R)|` | 0.70–1.20 | 0.993530187 |

For these evaluations, the relevant independently verified quantities are `F1 = +99.116276 mm`, `F23T = -56.802412 mm`, `F4 = +110.842560 mm`, `F4F = +94.916996 mm`, `F4M = -46.944756 mm`, `F4R = +55.916490 mm`, `Nd = 1.77622`, `φF = 37.4 mm`, and `φM = 30.4 mm`. Equation (4) uses `FT = 196.0000 mm`, matching the patent's own conditional-value block and the independently traced tele EFL rather than the erroneous 194 mm table label.

All four verified values lie inside their stated patent intervals. The agreement is also an internal consistency check on the selected Example 1 prescription, particularly on the corrected tele focal-length interpretation.

## Verification Summary

Independent sequential height/reduced-angle tracing and an ABCD matrix cross-check reproduce the final TypeScript arrays at all three infinity-focus zoom stations. The modeled common stop gives f/2.88 throughout the zoom range to source precision.

| Zoom station | EFL from final data | BFD from final data | Modeled f-number | Close-focus β from final data |
|---|---:|---:|---:|---:|
| Wide | 71.399889125 mm | 66.210478334 mm | 2.879999120 | -0.060008494 |
| Middle | 104.999901619 mm | 66.210493451 mm | 2.879999421 | -0.088247483 |
| Tele | 195.999982108 mm | 66.210595593 mm | 2.880001459 | -0.164728308 |

The final data also reproduces the complete set of 21 standalone element focal lengths, the six cemented-pair net powers, the functional-group powers, the focus-gap conservation, the G3/D21 zoom reversal, and the four first-embodiment conditional expressions. The surface-by-surface Petzval calculation, using `φ/(n·n′)` as defined by the project, sums to **+0.001108400043 mm⁻¹**, corresponding to an air-equivalent radius of **-902.201336 mm** under the audit's sign convention.

The prescription is all spherical. The geometry model retains positive edge thickness and positive shared-gap clearance at every defined zoom/focus endpoint. The tightest modeled shared-band gap is the L14→L15 air space; its authored semi-diameters require `gapSagFrac = 0.93` but still leave 0.151938 mm of physical rim clearance. This is a semi-diameter modeling choice, not a change to the patent radii or axial spacings.

The model contains no sensor cover glass, filter plate, dummy optical surface, flare-cutter plane, or mechanical part. The only omitted source planes are the non-powered S2 and S3 field stops described above. No prescription scaling or asphere transformation is present.

## Sources and References

- Susumu Sato, **“Zoom Lens System,” US 2003/0133200 A1**, Nikon Corporation, published July 17, 2003. Example 1 and Table 1; especially ¶¶0092–0114.
- Nikon USA, **AF-S VR Zoom-NIKKOR 70-200mm f/2.8G IF-ED** product specifications: [official Nikon product page](https://www.nikonusa.com/p/af-s-vr-zoom-nikkor-70-200mm-f28g-if-ed-refurbished/2139B/overview).
- Nikon Imaging, **Our Product History: 2000s**: [official Nikon history](https://imaging.nikon.com/imaging/information/products_history/2000/).
- Nikon Imaging, **The Thousand and One Nights No. 67**, historical discussion of Nikon's fast telephoto zoom lineage and the 2003 transition to the AF-S VR Zoom-Nikkor 70-200mm f/2.8G IF-ED: [official Nikon article](https://imaging.nikon.com/imaging/information/story/0067/).
- Glass-coordinate comparisons were checked against current public catalogs from [OHARA](https://www.ohara-inc.co.jp/en/product/catalog/), [HOYA](https://www.hoya-opticalworld.com/english/datadownload/index.html), [SCHOTT](https://www.schott.com/shop/advanced-optics/en/Optical-Glass/c/optical-glass), [HIKARI](https://www.hikari-g.co.jp/optical_glass/catalog/), [CDGM](https://www.cdgmgd.com/database/toWebDatabase.htm?url=database), and [SUMITA](https://www.sumita-opt.co.jp/en/download/). The resulting data annotations deliberately remain vendor-unresolved.
