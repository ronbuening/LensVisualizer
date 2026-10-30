## Patent Reference and Design Identification

**Patent:** US 2011/0090576 A1\
**Filed:** October 14, 2010\
**Priority:** October 16, 2009\
**Published:** April 21, 2011\
**Inventor:** Shigenobu Sugita\
**Assignee:** Canon Inc. (the patent prints Canon Kabushiki Kaisha)\
**Title:** _Optical System and Optical Apparatus Having the Same_\
**Example details:** Example 3

The prescription represented here is the third numerical embodiment of US 2011/0090576 A1. The project correlation is
to the CANON EF 600mm f/4 L IS II USM. Canon does not identify this patent on its product pages; the correlation instead
rests on convergent optical and product evidence and is treated as an identification inference rather than a manufacturer
statement.

The principal points of convergence are:

1. Example 3 is a native long-focus design with published focal length 584.89 mm and Fno 4.12, close to the production
   designation of 600 mm f/4 without applying a scale transformation.
2. The active patent model contains 15 lens elements in 11 air-separated groups plus a separate rear glass block G.
   Canon specifies 16 elements in 12 groups for the production lens **including the drop-in rear filter**, which accounts
   for the one-element/one-group difference when G is excluded from the LensVisualizer active prescription.
3. Canon identifies two production fluorite elements at G2 and G4. In Example 3, the second and fourth physical elements,
   L12 and L14, have the same low-index, very-low-dispersion coordinates and occupy the patent's Gp1 positions; the data
   file keeps CaF2 as a qualified spectral proxy, without claiming exact historical chemistry or supplier.
4. The patent specifies internal focusing by axial translation of cemented L16 and transverse stabilization by L22 + L23
   in the second embodiment; paragraph 0056 states that the third embodiment has the same configuration as the second but
   a longer focal length. Canon specifies inner focusing and image stabilization for the production lens.
5. Canon specifies a 4.5 m closest focusing distance and 0.15x maximum magnification. A mechanism-constrained paraxial
   reconstruction using only L16 motion reaches the 4.5 m object-to-image distance with a transverse magnification of
   -0.144229x, consistent in magnitude with the rounded production specification.
6. The patent publication predates Canon's May 2012 market introduction of the EF 600mm f/4L IS II USM.

Marketing and design values are deliberately kept separate. The production lens is marketed as 600 mm f/4; the modeled
prescription remains at its native patent scale and recomputes to an EFL of 584.816933 mm with a design f-number of 4.12.
No uniform scaling is applied. All active surfaces are spherical, so no conic conversion or aspheric-coefficient scaling
is applicable.

The source back-focus definition ¶0021 excludes glass block G. The source G stack remains drawn with its physical
12.00/2.00/107.811026 mm intervals, but its **published 31.00 mm clear diameter is restored** (sd 15.5) from the prior
18 mm envelope override. The original calls G a filter or faceplate and does not identify holder ownership; a production
drop-in identity remains an interpretation. All other literal effective diameters remain, except the pre-existing first-row
emendation. The US table prints 45.69 mm at S1. The older JP2011085788A attribution is retained as a historical lead,
but that auxiliary original is absent locally and cannot count as a fresh source check. Existing sd 72.845 remains with
structured unresolved provenance. Figure 5 and the Figure6 entrance-ray label demonstrate the literal 45.69 mm error;
they do not themselves print the exact adopted 145.69 mm replacement.

The published stop radius is 21.555 mm. The current ordinary-prime schema derives **21.114024998 mm** from nominal
F/4.12 and rejects an authored STO.sd. A source-radius trial is therefore confined to scratch and no schema, source
f-number, stop coordinate or tolerance is changed. The current exact entrance boundary is 69.587381 mm (beam f/4.202033).
The scratch published-radius boundary is 70.985900 mm (f/4.119247), agreeing with Figure 6's 70.98 mm label; at S6 it
exceeds the literal 55.815 mm cap by 0.005155 mm. That rounded-source boundary clip is disclosed, not exempted. Source
aperture evidence and the runtime's paraxial aperture convention are separate conclusions.

## Optical Architecture

Example 3 is a two-unit telephoto system consisting of a strongly positive front unit LF, an aperture stop, and a much
weaker negative rear unit LR. Independent isolation of the published groups gives LF an air-isolated focal length of
+564.235 mm and LR an air-isolated focal length of -2466.416 mm. These isolated group powers are descriptive of the
subassemblies removed from the full lens; they are not in-situ effective focal lengths.

The front unit contains L11, L12, L13, L14, L15, and the cemented L16 doublet. It provides the principal positive power,
places the two Gp1 high-Abbe elements where paraxial ray heights are large, and carries the sole axial focusing group at
its rear. The stop follows L16. The rear unit contains cemented L21, cemented L22, L23, L24, and cemented L25. It combines
relay/correction functions with the transversely moving L22 + L23 image-stabilization unit and ends in the Gp2/Gn1
cemented chromatic-correction pair.

The air-equivalent modeled first-vertex/image track is 474.91 mm; the physical track through G is 475.591026 mm. Relative to the computed
584.816933 mm EFL, the track/EFL ratio is 0.812066, satisfying the project's telephoto criterion of total track shorter
than focal length. The computed BFD/EFL ratio is 0.207060; because BFD is far shorter than EFL, the system is not a
retrofocus design.

The site diagram keeps the patent's LF/LR terminology while splitting the authored movement annotations into fixed
L11–L15, moving L16, and fixed LR spans. This prevents the movement overlay from averaging the translating doublet with
the stationary remainder of LF and makes the full imageward L16 travel visible.

The architecture is all-spherical. There is no zoom motion, folded path, perspective-control movement, diffractive phase
surface, or independent spherical-aberration control. The only modeled axial state change is the constrained L16 focus
translation. Image stabilization is documented as transverse motion and is discussed separately below; no arbitrary
stabilizer decenter is introduced into the centered prescription.

## Element-by-Element Analysis

The focal lengths quoted in this section are independently recomputed **standalone air-to-air element focal lengths**.
For cemented groups, the net air-isolated assembly focal length is stated separately. Neither number should be read as an
in-situ effective focal length inside the complete lens.

### L11 — Biconvex Positive

**nd = 1.48749, νd = 70.2. Glass: OHARA S-FSL5 spectral proxy. f = +439.751 mm.**

L11 is the front protective positive collector. Patent paragraph 0052 explains that the low-dispersion materials used for
the following positive elements can be vulnerable to damage, so a more durable positive lens is placed closest to the
object side. Its position also lets it contribute positive power before the first Gp1 element without making that high-Abbe medium the exposed front surface.

The S-FSL5 annotation is catalog-derived rather than named by the patent. Its nd and partial-dispersion coordinate closely
reproduce the patent row. The stored dPgF value of +0.0043 is below the patent's own +0.02 threshold for its defined
anomalous-partial-dispersion class, so L11 is not labeled as an anomalous-dispersion element.

### L12 (Gp1) — Biconvex Positive

**nd = 1.43387, νd = 95.1. Glass: CaF2 spectral proxy; source chemistry unresolved. f = +241.638 mm.**

L12 is the first Gp1 element and carries dPgF = +0.0534 from the patent's X column. It therefore satisfies the patent's
Gp1 anomalous-partial-dispersion condition. Paragraphs 0028–0032 place this class of positive low-dispersion element in
the front unit where on-axis ray height is large so that longitudinal chromatic aberration can be corrected without
requiring an excessively long system.

The CaF2 curve is an optical-coordinate proxy. Canon's production G2/G4 fluorite disclosure supports the selected
product correlation, but does not prove that these patent members have the same chemistry or historical material.

### L13 — Biconcave Negative

**nd = 1.83481, νd = 42.7. Glass: HIKARI J-LASF05 spectral proxy; source θgF 0.5636 retained. f = -190.672 mm.**

L13 follows the first high-power, low-dispersion positive element and supplies negative power within the otherwise
positive front unit. The patent describes the front-unit sequence but does not assign L13 a separate aberration function;
its role as a local power-balancing corrector is therefore an interpretation of its sign and location rather than a
quoted patent claim.

The supplier remains unresolved. J-LASF05 names the existing compatible coefficient curve, while the original
θgF/X remains authoritative. The proxy name does not establish a historical source material or vendor.

### L14 (Gp1) — Biconvex Positive

**nd = 1.43387, νd = 95.1. Glass: CaF2 spectral proxy; source chemistry unresolved. f = +222.359 mm.**

L14 repeats the Gp1 material coordinates of L12 and carries the same patent dPgF = +0.0534. It is the second front-unit
anomalous-partial-dispersion positive element described in paragraph 0051. The two separated Gp1 elements distribute
strong low-dispersion positive power across the front unit rather than concentrating the full chromatic burden in one
component.

As with L12, the CaF2 assignment is tied to Canon's production identification of G2 and G4 as fluorite and to the patent
coordinates. No absolute nC, nF, or ng values are invented from nd, νd, and θgF.

### L15 — Negative Meniscus

**nd = 1.48749, νd = 70.2. Glass: OHARA S-FSL5 spectral proxy. f = -731.587 mm.**

L15 is a weak negative meniscus immediately ahead of the focusing doublet. Its standalone power is small compared with
L12, L14, and the individual components of L16. In the complete front unit it provides a gradual transition from the
strongly powered front section into the movable rear portion of LF. The patent does not state a unique correction task
for L15, so any more specific aberration assignment would be speculative.

### L16a + L16b — Cemented Internal-Focus Doublet

**L16a:** nd = 1.80518, νd = 25.4. Glass: OHARA S-TIH6 spectral proxy. f = +168.506 mm.\
**L16b:** nd = 1.83481, νd = 42.7. Glass: HIKARI J-LASF05 spectral proxy; source θgF 0.5636 retained. f = -87.801 mm.\
**Cemented L16 net:** air-isolated f = -188.260 mm.

The positive L16a and stronger negative L16b form a net-negative cemented doublet at the rear of the positive front unit.
Patent paragraph 0052 explicitly identifies cemented L16 as the axial focusing group and states that it moves toward the
image side for focusing from infinity toward close distance.

The fact that the cemented pair is net negative in isolation does not imply that the complete front unit is negative.
With all of LF retained in its published spacing, the front unit remains strongly positive. The focusing action results
from translating L16 within that powered environment while conserving the adjacent-gap sum in the constrained model.

### L21a + L21b — First Rear-Unit Cemented Doublet

**L21a:** nd = 1.83400, νd = 37.2. Glass: OHARA S-LAH60 spectral proxy. f = -85.507 mm.\
**L21b:** nd = 1.74320, νd = 49.3. Glass: OHARA L-LAM60 spectral proxy (runtime S-LAM60 curve). f = +58.323 mm.\
**Cemented L21 net:** air-isolated f = +181.180 mm.

L21 begins the rear unit immediately after the stop. The negative first component and stronger positive second component
produce a modest net-positive cemented assembly in isolation. The patent provides the element sequence but does not
isolate an individual aberration assignment for L21, so its treatment here is limited to the verified power distribution
and its position as the first relay/correction group in LR.

The L-LAM60 coordinate label is retained, with its runtime S-LAM60 coefficient curve explicitly qualified. Both
L21 matches are spectral proxies, not proof of historical chemistry, supplier or melt.

### L22a + L22b — Cemented Image-Stabilization Doublet

**L22a:** nd = 1.84666, νd = 23.8. Glass: OHARA S-TIH53 spectral proxy. f = +64.968 mm.\
**L22b:** nd = 1.72000, νd = 50.2. Glass: OHARA S-LAL10 spectral proxy; source θgF 0.5535 retained. f = -40.523 mm.\
**Cemented L22 net:** air-isolated f = -116.157 mm.

L22 is a net-negative cemented doublet in isolation. Paragraph 0055 states that L22 and L23 move integrally with a
component perpendicular to the optical axis to absorb vibration; paragraph 0056 carries this configuration into the
third embodiment. The power of the complete isolated L22 + L23 stabilization assembly is -0.0159061 mm^-1, corresponding
to an air-isolated focal length of -62.869 mm.

L22b now names the existing compatible S-LAL10 curve as a spectral proxy. Its source X remains authoritative,
including its difference from that catalog curve. No vendor or chemistry identity follows from the curve label.

### L23 — Negative Meniscus

**nd = 1.83400, νd = 37.2. Glass: OHARA S-LAH60 spectral proxy. f = -138.953 mm.**

L23 is the negative singlet that moves transversely together with L22 for stabilization. Its negative standalone power
adds to the negative power of cemented L22, making the combined stabilizer unit substantially more negative than either
L22's weak net power or L23 alone would suggest when considered purely by focal-length sign.

No stabilizer decenter range is published in the selected patent and none is reconstructed. The data therefore records
the centered optical prescription and the source-defined identity of the moving group without inventing an IS travel.

### L24 — Positive Meniscus

**nd = 1.84666, νd = 23.8. Glass: OHARA S-TIH53 spectral proxy. f = +139.703 mm.**

L24 is a positive meniscus between the transverse IS unit and the final Gp2/Gn1 cemented pair. In the rear-unit power
balance it restores positive contribution after the negative L22 + L23 assembly. The patent does not assign a separate
named aberration function to L24, so it is best described as a rear relay/corrector element rather than attributing a
specific correction mechanism that is not stated by the source.

### L25a (Gp2) + L25b (Gn1) — Final Cemented Chromatic-Correction Pair

**L25a (Gp2):** nd = 1.74950, νd = 35.3. Glass: OHARA S-NBH51 spectral proxy. f = +62.044 mm.\
**L25b (Gn1):** nd = 1.92286, νd = 18.9. Glass: OHARA S-NPH2 spectral proxy. f = -69.103 mm.\
**Cemented L25 net:** air-isolated f = +658.946 mm.

The final cemented pair is weakly positive as an isolated assembly despite containing individually strong positive and
negative elements. Its significance in the patent is primarily chromatic and field correction rather than gross system
power. Paragraphs 0033–0037 specify a high-index, high-dispersion negative Gn1 with anomalous partial dispersion near the
image side to assist correction of lateral chromatic aberration, image-surface curvature, and astigmatism. Paragraphs
0042–0046 add the Gp2 positive partner under a separate refractive-index/Abbe/partial-dispersion condition.

L25b carries the patent's dPgF = +0.0375 and therefore falls within the patent's anomalous-partial-dispersion definition.
L25a carries dPgF = -0.0026 and is not classified that way. The S-NBH51 and S-NPH2 labels are catalog-derived coordinate
matches; S-NPH2 reproduces the patent's displayed nd, νd, and θgF coordinates exactly at the audited precision.

The US text in paragraphs 0048–0050 literally uses niobium-oxide wording for Gp2 and neptunium-oxide/NpO wording for
Gn1. That chemical wording is preserved as a source anomaly and is not used to override the optical-coordinate glass
audit. The data file makes no chemical correction claim.

### G — Source Glass Block / Filter or Faceplate

**nd = 1.51633, νd = 64.1, θgF = 0.5352, X = −0.0007. Glass: OHARA S-BSL7 spectral proxy.**

Rows 28/29 prescribe a 2 mm plane plate, 12 mm behind S27, with 31 mm effective diameter. Its clear sd 15.5 is restored;
no larger physical blank or opaque extension is invented from the schematic. The original does not establish a lens
holder or camera ownership, so the drawn working-system representation remains an interpretation. Following air is
107.811026 mm from the source's plate-absent 121.13 mm back focus. No source stack number is folded into a lens gap.

## Glass Identification and Selection

The original explicitly defines d 587.6/F 486.1/C 656.3/g 435.8 nm and its partial ratio on PDF page 7/printed 2, ¶0022.
Every one of 16 modeled media matches the Third Numerical Embodiment's nd/νd/θgF/X columns on page 10/printed 5.
All 16 X values are retained literally as dPgF; the source normal line is the engine line. Rounded θgF and X columns
can differ by up to 0.000084 when recomputed, so no source X is re-rounded from the other rounded column. No C/F/g
indices are printed or authored. Each medium now explicitly declares d reference; all 16 compatible curves are qualified
proxies, never proof of historical supplier, melt or chemistry. Genuine source X controls g, while C–d–F shape is a proxy.

| Medium | Source nd / νd | Source θgF | Source X = retained dPgF | Compatible curve |
| ------ | -------------- | ---------: | -----------------------: | ---------------- |
| L11    | 1.48749 / 70.2 |     0.5300 |                  +0.0043 | S-FSL5           |
| L12    | 1.43387 / 95.1 |     0.5373 |                  +0.0534 | CaF2             |
| L13    | 1.83481 / 42.7 |     0.5636 |                  -0.0083 | J-LASF05         |
| L14    | 1.43387 / 95.1 |     0.5373 |                  +0.0534 | CaF2             |
| L15    | 1.48749 / 70.2 |     0.5300 |                  +0.0043 | S-FSL5           |
| L16a   | 1.80518 / 25.4 |     0.6161 |                  +0.0150 | S-TIH6           |
| L16b   | 1.83481 / 42.7 |     0.5636 |                  -0.0083 | J-LASF05         |
| L21a   | 1.83400 / 37.2 |     0.5775 |                  -0.0038 | S-LAH60          |
| L21b   | 1.74320 / 49.3 |     0.5530 |                  -0.0078 | S-LAM60          |
| L22a   | 1.84666 / 23.8 |     0.6205 |                  +0.0167 | S-TIH53          |
| L22b   | 1.72000 / 50.2 |     0.5535 |                  -0.0058 | S-LAL10          |
| L23    | 1.83400 / 37.2 |     0.5775 |                  -0.0038 | S-LAH60          |
| L24    | 1.84666 / 23.8 |     0.6205 |                  +0.0167 | S-TIH53          |
| L25a   | 1.74950 / 35.3 |     0.5818 |                  -0.0026 | S-NBH51          |
| L25b   | 1.92286 / 18.9 |     0.6495 |                  +0.0375 | S-NPH2           |
| G      | 1.51633 / 64.1 |     0.5352 |                  -0.0007 | S-BSL7           |

The source explicitly defines X>0.02 as anomalous dispersion and identifies Gp1/Gn1 positions. Thus L12/L14 and
L25b retain their source APD flags; CaF2 is still only a chemistry-compatible curve for Gp1. No coating, indexed
cement, resin or other separate layer is prescribed at the four bonds. The source's unusual chemical wording remains
an unresolved text anomaly, without substituting a catalog chemical formula or changing any optical coordinate.

The chromatic strategy is intentionally split across the system. L12 and L14 place very-low-dispersion,
anomalous-partial-dispersion positive material in the front unit where ray heights are large, which the patent uses to
reduce longitudinal chromatic error while retaining a compact positive front group. The final L25b Gn1 element uses the
opposite end of the glass palette: high index, high dispersion, and positive dPgF near the image side, where the patent
states that it contributes to lateral chromatic and field correction. The L25a Gp2 partner satisfies the patent's
separate partial-dispersion condition and forms a weakly positive cemented pair with Gn1.

These statements do not imply apochromatic correction in the strict design-classification sense. The data supports
specific anomalous-partial-dispersion claims for L12, L14, and L25b through the patent's published dPgF-equivalent values,
and several named glasses can resolve through catalog Sellmeier data, but the selected patent does not publish a full
per-element set of absolute line indices.

## Focus Mechanism

Focusing is internal and is carried by cemented L16. Patent paragraph 0052 gives the group identity and direction—L16
moves toward the image side for closer focus—but does not publish the travel or a close-focus spacing table. The focus
state in the data file is therefore `CONSTRAINED_RECONSTRUCTION`, not a published close-focus prescription.

The reconstruction uses Canon's 4.5 m closest focusing distance as an object-to-image-plane constraint while permitting
only the patent-defined L16 group to translate and holding the image plane fixed. The adjacent air gaps are coupled so
that their sum remains 104.41 mm:

| State               | d10 before L16 (mm) | d13 after L16 (mm) |        L16 shift (mm) |
| ------------------- | ------------------: | -----------------: | --------------------: |
| Infinity            |           31.840000 |          72.570000 |              0.000000 |
| Reconstructed 4.5 m |           51.952106 |          52.457894 | +20.112106 image-side |

With the current physical G stack, the retained close setting gives 4500.681021 mm object-to-image distance and
|m| 0.144229; half focus gives 8314.156584 mm. The former 4.5 m solve used the reduced/plate-absent distance convention.
The 0.681021 mm physical difference is consistent with the plate stack, and remains well within the rounded production
4.5 m specification. No cam value is adjusted to hide it and no exact 4.500000 m physical solution is claimed.

No second axial degree of freedom is introduced. The IS group remains centered during the focus reconstruction because
the patent describes its motion as transverse stabilization, not a coupled focusing movement.

## Chromatic Correction Strategy

The patent's chromatic strategy is asymmetric between front and rear. In the front unit, Gp1 is a positive material with
very high νd and positive anomalous partial dispersion. The patent explicitly links this placement to correction of
longitudinal chromatic aberration at large on-axis ray heights. Example 3 uses the same Gp1 coordinates twice, at L12 and
L14, and both satisfy the main and preferred Gp1 conditions.

In the rear unit, the patent instead places Gn1 near the image side, where the on-axis ray height is relatively small and
the off-axis principal-ray height is more useful for lateral color correction. The patent attributes to this high-index,
high-dispersion, anomalous-partial-dispersion negative element a combined role in lateral chromatic aberration,
image-surface curvature, and astigmatism. L25a/Gp2 is cemented directly to Gn1 and satisfies a complementary condition
intended to preserve lateral-color correction while balancing the final pair.

The data's partial-dispersion annotations are source-based, not inferred from Abbe number alone. For the unresolved M3
and M8 glasses, the analysis does not replace the patent coordinates with a catalog Sellmeier model merely because a
nearby nd/νd glass exists.

## Conditional Expressions

The third embodiment satisfies the patent's principal and preferred optical-material conditions when evaluated directly
from the stored Example 3 coordinates.

| Condition                                   | Example 3 value | Result |
| ------------------------------------------- | --------------: | ------ |
| (1) `75 < νd(Gp1) < 99`                     |            95.1 | Pass   |
| (2) `0.020 < dPgF(Gp1) < 0.100`             |         +0.0534 | Pass   |
| Preferred (2a) `0.025 < dPgF(Gp1) < 0.080`  |         +0.0534 | Pass   |
| (3) `1.75 < nd(Gn1) < 2.10`                 |         1.92286 | Pass   |
| (4) `0.020 < dPgF(Gn1) < 0.100`             |         +0.0375 | Pass   |
| Preferred (3a) `1.80 < nd(Gn1) < 2.00`      |         1.92286 | Pass   |
| Preferred (4a) `0.023 < dPgF(Gn1) < 0.070`  |         +0.0375 | Pass   |
| (5) `1.90 < nd(Gp2) + 0.0125νd(Gp2) < 2.24` |         2.19075 | Pass   |
| Preferred (5a) `2.00 < ... < 2.20`          |         2.19075 | Pass   |
| (6) `-0.010 < dPgF(Gp2) < 0.003`            |         -0.0026 | Pass   |
| Preferred (6a) `-0.008 < dPgF(Gp2) < 0.001` |         -0.0026 | Pass   |

Table 1 of the US publication prints **2.15** for condition (5) in the third embodiment. Direct substitution of the
Example 3 values gives `1.74950 + 0.0125 x 35.3 = 2.19075`. The published 2.15 is retained as a documented source
contradiction; the data file does not silently substitute it. The directly evaluated value still lies inside both the
main and preferred condition-(5) ranges.

The rear-position requirements in paragraphs 0039–0046 are also satisfied directly from the prescription. With `L`
defined from the stop to surface Re, `L = 56.57 mm`. The positive Gp2 element spans 0.892699L to 0.966413L and the
negative Gn1 element spans 0.966413L to 1.000000L, so each entire element lies within the required 0.5L–1.0L region.
Table 1 nevertheless prints 0.893L for the **negative** Gn1 position and 0.966L for the **positive** Gp2 position. Those
numbers coincide with surfaces 25 and 26 respectively and do not follow a common element reference-point convention;
they are therefore preserved as a table-level ambiguity rather than reinterpreted as element centroids or principal
planes.

## Image Stabilization

For the second numerical embodiment, paragraph 0055 identifies cemented L22 and negative L23 as an integral unit that
moves with a component perpendicular to the optical axis to absorb vibration. Paragraph 0056 states that the third
embodiment uses the same configuration as the second, so this transverse L22 + L23 unit applies to Example 3.

The centered air-isolated L22 + L23 assembly has a verified focal length of -62.869 mm. That number characterizes the
assembly removed from the full optical train; it is not an in-situ stabilizer EFL and does not determine the required
physical decenter for a given shake angle.

The patent does not publish a stabilization decenter range, and the production specifications do not supply one. The
data file therefore models the centered state only and does not invent a transverse travel. Canon's product literature
confirms the production lens has optical image stabilization, but that product-level feature confirmation is kept
separate from the patent-derived identity of the moving optical group.

## Modeled quantities and original review — 2026-10-30

Fresh inspection used the original `patents/US20110090576A1.pdf`, Third Numerical Embodiment ¶0060/table on PDF
page 10/printed 5, Figure 5/6 on page 4/sheet 3 of 4, and the reference/partial definition ¶0022 on page 7/printed 2.
The PDF contains native 2560 × 3300 rasters at 300 dpi. Native table and optical crops were read without upsampling;
the older 600 dpi views add no native detail. Figure 5 gives about 3.4 native px/mm within the optical train, but its
back-space scale is schematic. Two-pixel readings are roughly ±0.6 mm before stroke/scale uncertainty; outer blank
heights retain ±1–2 mm plus local schematic variation. Leaders, brackets, pupil labels and mechanics are excluded.

Clear radii follow the source table, with the retained first-row emendation and source G restoration disclosed above.
Figure 5 resolves outer shoulders on S10/S13/S20. Their literal clear caps 37.375/30.055/15.425 mm are preserved;
`rimExtensionSd` becomes 40.385/32.215/17.12 mm from the corresponding front-cap outline. These are conservative
inferred blank heights, not printed dimensions. Native cap/outer ratios are roughly 0.87/0.80/0.89 (reading ±0.03 plus
schematic distortion), while adopted ratios 0.925/0.933/0.901 retain literal source apertures. The remaining mismatch
is explicit: no R/d or cap is tuned to a schematic. No opaque land is added at S12/S16/S19/S26, no resin wing is
created, and no flat cut is authored. Existing gapSagFrac 0.95 remains unchanged: S20/S21 source sags use 4.993263 mm
of 5.310 mm, leaving 0.316737 mm physical clearance. No new validation relaxation is introduced.

Actual generated SVGs at infinity/half/close focus were compared with native Figure 5. All 21 focus states have 16
finite, closed, connected element paths and zero hidden renderer trim. All 3087 full-open launches are aimed and all 63
chiefs clear. Axial/0.6-format/corner survivors of 49 are 49/36/23 at infinity, 45/36/25 at half focus, and 45/36/25 at
close. Six early states clear all 49 axial samples; the other 15 retain 45/49, 969 of 1029 axial passes in total, with
first clips at S7 then S6. Source effective diameters are not widened to clear inferred finite rays. At the next
published stop f/5.6, all 49 axial samples clear at all 21 states. The literal G 15.5 cap adds peripheral source-plate
clips while all modeled chiefs remain clear. Surface, image-circle, current aperture-model and format-corner checks
pass. No inferred cut requires an exemption. The schema-derived iris and scratch published-stop test remain separate.

The source 2.12° chief reaches 21.697373 mm, 100.3% of the modeled format radius; the runtime format corner is separately
solved and clear. EFL 584.816933 versus printed 584.89 and plate-absent BFL 121.092285 versus 121.13 retain rounding-level
residuals. The source plane is 0.037715 mm imageward of Gaussian focus; no gap is tuned. The physical/reduced tracks
are 475.591026/474.910000 mm, and the printed Lt 475.58 is comparable to the physical track within 0.011026 mm.

The available axial cam remains inferred and centered IS remains a documented architecture only: no numerical
transverse range is published and no displaced-IS clearance is asserted. Exact S1 correction provenance and the
prime-lens physical-stop representation remain follow-up items. Original source inspection, sampled runtime clearance
and production correlation remain distinct conclusions. The actual August/October audit dates below are retained.

## Sources / References

1. Shigenobu Sugita, **US 2011/0090576 A1**, _Optical System and Optical Apparatus Having the Same_, published
   April 21, 2011. Third Numerical Embodiment / Example 3; especially ¶¶0021–0022, 0027–0037, 0042–0057, numerical
   Example 3, and Table 1.
2. **JP2011085788A**, priority-family publication, Third Numerical Embodiment. Historical first-surface correction lead; local original absent for this fresh review, so exact replacement provenance remains unresolved.
3. Canon Camera Museum, **EF600mm f/4L IS II USM**:
   https://global.canon/en/c-museum/product/ef413.html
4. Canon Latin America, **EF 600mm f/4L IS II USM**:
   https://www.cla.canon.com/en/p/ef-600mm-f-4l-is-ii-usm
5. OHARA, **Pocket Catalog 2023-05**:
   https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf
6. HOYA, optical-glass data download:
   https://www.hoya-opticalworld.com/english/datadownload/index.html
7. HIKARI, optical-glass catalog:
   https://www.hikari-g.co.jp/optical_glass/catalog/
8. SCHOTT, optical-glass pocket catalog used in the cross-vendor audit:
   https://www.schott-pharma.com/shop/medias/schott-optical-glass-pocket-catalog-2020.pdf
9. CDGM, colourless optical-glass data source used in the cross-vendor audit:
   https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods
10. SUMITA, optical-glass catalog/data download:
    https://www.sumita-opt.co.jp/en/download/
11. Ansys OpticStudio, **How to use Ray Aiming** and **Paraxial vs. Real pupils in optical system**. Used to distinguish
    paraxial pupil imaging from real-ray stop filling when pupil aberration is material:
    https://optics.ansys.com/hc/en-us/articles/42661778056083-How-to-use-Ray-Aiming
    https://optics.ansys.com/hc/en-us/articles/42661958583571-Paraxial-vs-Real-pupils-in-optical-system

## 2026-10-30 — Source-Stated Catalog Design Metadata

This metadata-only follow-up preserves the original review date and source inspection. The catalog design focal value is 584.89 mm, taken directly from Third Numerical Embodiment, paragraph0060, PDF p10 / printed5: various kinds of data f=584.89mm. The prior computed model EFL value 584.816932668 mm remains a calculated result, separately qualified in this analysis; it is not a printed source target.

All R/d, media, spectral values, stops, apertures, gaps, focus/zoom controls, source-errata dispositions and retained limitations are unchanged. This correction adds no fresh shape/glass review and makes no claim to resolve an authored reconstruction or production correlation.
