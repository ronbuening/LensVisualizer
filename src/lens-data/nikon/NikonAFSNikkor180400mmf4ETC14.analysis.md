## Patent Reference and Design Identification

**Patent:** WO 2019/131993 A1  
**Application number:** PCT/JP2018/048415  
**Priority:** JP 2017-255101 and JP 2017-255102, both 29 December 2017  
**Filed:** 28 December 2018  
**Published:** 4 July 2019  
**Inventors:** Mitsuaki Wada; Masashi Yamashita  
**Applicant:** Nikon Corporation  
**Title:** Variable Power Optical System, Optical Equipment, and Method for Manufacturing Variable Power Optical System  
**Embodiment analyzed:** Second embodiment, Example 1; Figures 7–9 and Tables 8–11  
**Lens:** NIKON AF-S NIKKOR 180-400mm f/4E TC1.4 FL ED VR

The primary data file transcribes the converter-out form of Example 1, while the supplemental optical-configuration file
transcribes the complete converter-in form published for the same example. The correlation with the production lens is
fixed for this model, but Nikon has not been found to have publicly identified this patent as the commercial prescription.

The identification rests on convergent evidence:

1. Table 8 gives focal lengths of 183.600, 300.000, and 392.000 mm at approximately f/4.08, closely framing Nikon's
   marketed 180–400mm f/4 range.
2. Table 10 gives 257.052, 420.020, and 548.825 mm at approximately f/5.71 with the converter inserted, closely framing
   the marketed 252–560mm f/5.6 range.
3. Both configurations use a 21.6 mm image height, consistent with a 135-format image circle. Nikon identifies the
   production lens as an FX-format Nikon F-mount lens.
4. The active converter-out model has 27 elements in 19 air-separated groups, matching Nikon's published main-lens
   construction after the separately listed protective glass is excluded. The patent converter has eight elements in
   four air-separated groups, whereas Nikon specifies eight elements in five groups for the production converter; the
   converter group count therefore remains a direct difference rather than being forced into agreement.
5. Figure 7 shows the positive–negative–positive–positive four-group zoom with a negative G1B focus subgroup and a
   transverse G4B vibration-reduction subgroup. Figure 9 inserts Gx between G4F and G4R while retaining the same front
   zoom system.
6. The patent's December 2017 priority date immediately precedes Nikon's 9 January 2018 product announcement.

The two files therefore represent one switchable catalog lens through the shared `opticalConfiguration` relationship:
the visible primary member is TC out, and the hidden supplemental member is TC 1.4x in. Marketing values remain separate
from patent and computed design quantities throughout.

## Optical Architecture

The converter-out system is a four-group positive–negative–positive–positive long-focus zoom. G1 and G4 remain fixed
relative to the image plane during zooming, while negative G2 and positive G3 move axially (¶0097). G2 moves monotonically
toward the image side. G3 is a reversing compensator: its modeled front vertex moves slightly imageward from wide to the
middle state, then objectward toward tele, while the image plane remains fixed.

The active converter-out prescription contains 27 powered elements in 19 air-separated groups. It has eight cemented
units and no aspherical, diffractive, folded, or reflective surfaces. The aperture stop is the patent's source surface 31,
located immediately before G4A.

The principal isolated-group powers computed from the normalized converter-out arrays are:

| Group | Composition and role | Isolated EFL (mm) |
| --- | --- | ---: |
| G1 | Fixed positive front group and internal-focus assembly | +231.443210 |
| G1A | Positive front collector | +154.930509 |
| G1B | Negative cemented focus group | −155.551679 |
| G1C | Positive relay | +307.618637 |
| G2 | Negative moving variator | −48.502266 |
| G3 | Positive moving compensator | +108.864106 |
| G4 | Fixed positive master section, TC out | +226.615029 |
| G4A | Positive section immediately behind the stop | +300.682383 |
| G4B | Negative vibration-reduction subgroup | −98.707207 |
| G4C | Positive relay before the converter bay | +110.762469 |
| G4D | Weak positive rear master group | +1095.692714 |

These are air-to-air isolated-group focal lengths, not powers evaluated inside the complete zoom. The overall effective
focal length depends on the group separations and therefore changes strongly even though the isolated group powers do not.

G1 is divided into positive G1A, negative G1B, and positive G1C. The negative cemented G1B pair translates for focusing
(¶0098). G2 supplies the dominant variator action. G3 compensates the image position, and its reversing path permits the
wide, middle, and tele states to share a fixed image plane. G4 contains the stop-side correction, the VR group, a relay,
the converter bay, and the rear master group.

With the converter engaged, the complete active prescription contains 35 powered elements in 23 air-separated groups.
The eight-element Gx group is inserted between G4C and G4D. Its computed isolated EFL is
−231.726433 mm. The complete G4 span then has an isolated EFL of +2420.366589 mm, close to the patent's printed
+2424.080 mm. Gx acts in the converging rear beam rather than as a front-mounted teleconverter; its negative power
increases the system focal length while the rear group and image plane remain in substantially the same axial region.

Under the project's strict `TL/EFL < 1` definition, the converter-out wide and middle states are not telephoto. The
normalized active tele state is only marginally below unity at 0.998867, while the patent's physical tele track gives
392.330/392.000 = 1.000842. The design is therefore not described broadly as a telephoto architecture. With Gx engaged,
the normalized middle and tele states satisfy the strict definition at 0.926923 and 0.709010 respectively; the wide
converter-in state does not. No state is retrofocus because the back focal distance remains far shorter than the effective
focal length.

## Element-by-Element Analysis

The focal lengths below are standalone thick-element focal lengths in air, computed from each element's two boundary
surfaces and center thickness. Cemented-unit and isolated-group focal lengths are stated separately where useful. A
standalone value does not describe the element's effective contribution inside the complete zoom.

### G1A — Positive Front Collector

#### L11 — Biconvex Positive

`nd = 1.43385, νd = 95.23. Glass: Fluorite (CaF2; production-correlation supported). f = +402.954 mm.`

L11 is the most object-side collector. Its low index, very high Abbe number, and directly published
`dPgF = +0.0649` make it the strongest documented anomalous-dispersion component in the prescription. Nikon's product
specification independently states that the commercial lens contains one fluorite element, supporting the material-class
correlation without proving that every detail of the patent element was carried into production.

#### L12 — Biconvex Positive

`nd = 1.49782, νd = 82.57. Glass: J-FKH1 class (HIKARI exact nd/νd pair). f = +218.169 mm.`

L12 supplies more standalone positive power than L11 while retaining high dispersion control. Table 11 publishes
`dPgF = +0.0391` for this element. HIKARI's J-FKH1 catalog coordinate reproduces the patent's `nd`/`νd` pair exactly; the
class label does not establish Nikon's procurement source.

#### L13 — Biconcave Negative

`nd = 1.72047, νd = 34.71. Glass: S-NBH8 class (OHARA exact nd/νd pair). f = −369.540 mm.`

L13 introduces weak negative power and substantially higher dispersion after the two low-dispersion positives. Its
coordinate pair matches the public OHARA S-NBH8 class, but the label is a catalog equivalence rather than evidence of
Nikon's procurement source.

#### L14 + L15 — Cemented Meniscus Pair

`L14: nd = 1.77250, νd = 49.62. Glass: J-LASF016 (Hikari catalog equivalent; production supplier unspecified). f = −178.905 mm.`  
`L15: nd = 1.49782, νd = 82.57. Glass: J-FKH1 class (HIKARI exact nd/νd pair). f = +120.560 mm.`

The negative L14 and positive L15 menisci share the source surface 8 interface. Their computed cemented net EFL is
+392.888841 mm, much weaker than either standalone member. The bonded pair therefore adds modest positive power while
providing a large index and dispersion contrast near the rear of G1A.

### G1B — Cemented Internal-Focus Group

#### L16 + L17 — Negative Focus Pair

`L16: nd = 1.79504, νd = 28.69. Glass: J-LAFH3 class (HIKARI exact nd/νd pair). f = +374.558 mm.`  
`L17: nd = 1.51680, νd = 63.88. Glass: J-BK7 (Hikari catalog equivalent; production supplier unspecified). f = −109.981 mm.`

The complete cemented pair has EFL −155.551679 mm and constitutes G1B. The individually weak positive L16 and stronger
negative L17 form a compact negative translating unit. The patent specifically prefers a cemented positive-plus-negative
G1B and assigns it axial focus motion (¶0098). The centered prescription does not model focus-group tilt or motor
mechanics.

### G1C — Positive Relay

#### L18 — Positive Meniscus

`nd = 1.72916, νd = 54.61. Glass: J-LAK18 (Hikari catalog equivalent; production supplier unspecified). f = +307.619 mm.`

L18 is the single-element positive G1C relay. It restores positive power after G1B and establishes the beam entering the
negative variator. Its standalone focal length equals the isolated G1C focal length because the subgroup contains no
other powered element.

### G2 — Negative Variator

#### L21 — Biconcave Negative

`nd = 1.88100, νd = 40.14. Glass: TAFD33 (Hoya catalog equivalent; production supplier unspecified). f = −70.313 mm.`

L21 is the strongest isolated negative element at the front of G2. Its high index permits substantial power in a thin
moving element and begins the compact negative variator.

#### L22 + L23 — Nearly Afocal Cemented Pair

`L22: nd = 1.49782, νd = 82.57. Glass: J-FKH1 class (HIKARI exact nd/νd pair). f = −79.857 mm.`  
`L23: nd = 1.80379, νd = 23.82. Glass: 804238 very-dense flint class (catalog unresolved). f = +79.151 mm.`

The members have almost equal and opposite standalone powers. Their cemented net EFL is +3705.381023 mm, so the pair is
nearly afocal in isolation. Its principal function is therefore not to provide G2's negative power but to introduce a
strong dispersion and shape contrast inside the moving variator.

#### L24 — Negative Meniscus

`nd = 1.49782, νd = 82.57. Glass: J-FKH1 class (HIKARI exact nd/νd pair). f = −166.918 mm.`

L24 completes G2 with additional negative power. Together, L21, the nearly afocal cemented pair, and L24 produce the much
stronger isolated group EFL of −48.502266 mm through their spaced interaction.

### G3 — Positive Compensator

#### L31 — Positive Meniscus

`nd = 1.69680, νd = 55.52. Glass: J-LAK14 (Hikari catalog equivalent; production supplier unspecified). f = +391.588 mm.`

L31 contributes weak positive standalone power at the front of the compensator. Its moderate index and Abbe number
prepare the beam for the stronger cemented pair that follows.

#### L32 + L33 — Cemented Positive Pair

`L32: nd = 1.49782, νd = 82.57. Glass: J-FKH1 class (HIKARI exact nd/νd pair). f = +79.388 mm.`  
`L33: nd = 1.90200, νd = 25.26. Glass: J-LASFH24 (Hikari catalog equivalent; production supplier unspecified). f = −169.998 mm.`

The pair's computed cemented EFL is +149.611940 mm. L32 supplies the dominant positive standalone power and L33 adds a
high-index, low-Abbe negative meniscus. The complete G3 group has EFL +108.864106 mm and follows the non-monotonic
compensator path required to maintain the image plane.

### G4A — Stop-Side Positive Section

#### L41 + L42 — Cemented Pair

`L41: nd = 1.95375, νd = 32.32. Glass: S-LAH98 class (OHARA exact nd/νd pair). f = −89.100 mm.`  
`L42: nd = 1.58313, νd = 59.42. Glass: J-SK12 (Hikari catalog equivalent; production supplier unspecified). f = +68.572 mm.`

The stop precedes this pair. L41 is a high-index negative meniscus, while L42 is a stronger positive biconvex crown. Their
cemented net EFL is +300.682383 mm, equal to the isolated G4A power. The placement immediately behind the stop permits
substantial internal correction with only moderate net positive power.

### G4B — Vibration-Reduction Subgroup

#### L43 + L44 — Cemented VR Core

`L43: nd = 1.81511, νd = 23.33. Glass: 815233 dense flint class (catalog unresolved). f = +77.034 mm.`  
`L44: nd = 1.63288, νd = 31.50. Glass: 633315 flint class (catalog unresolved). f = −110.731 mm.`

The cemented core has net EFL +263.993649 mm. The pair alone is positive, but it is followed by a stronger negative
member so that the complete translating VR subgroup is negative.

#### L45 — Biconcave Negative

`nd = 1.72567, νd = 54.80. Glass: 726548 lanthanum crown class (catalog unresolved). f = −72.385 mm.`

L45 provides the dominant negative power in G4B. The three-element subgroup has isolated EFL −98.707207 mm. The patent
assigns G4B motion with a component perpendicular to the optical axis for vibration reduction (¶0099).

### G4C — Positive Relay Before the Converter Bay

#### L46 + L47 — Cemented Relay Pair

`L46: nd = 1.90366, νd = 31.31. Glass: S-LAH95 class (OHARA nd exact; Δνd = +0.03). f = −104.782 mm.`  
`L47: nd = 1.68991, νd = 56.97. Glass: 690570 crown class (catalog unresolved). f = +77.506 mm.`

The pair's net EFL is +310.820938 mm. Its opposite standalone powers and dispersion contrast provide correction while
retaining weak positive net power.

#### L48 — Positive Meniscus

`nd = 1.81945, νd = 28.67. Glass: 819287 dense flint class (catalog unresolved). f = +169.414 mm.`

L48 completes G4C, bringing the subgroup to +110.762469 mm. It lies immediately before the large converter bay and helps
establish the converging beam in which Gx is inserted.

### G4D — Rear Master Group

#### L49 + L410 — Cemented Rear Pair

`L49: nd = 1.80592, νd = 41.79. Glass: 806418 lanthanum flint class (catalog unresolved). f = −244.096 mm.`  
`L410: nd = 1.62730, νd = 37.62. Glass: 627376 flint class (catalog unresolved). f = +105.926 mm.`

The pair's computed net EFL is +187.588989 mm. It receives the beam either directly from G4C or through the inserted
converter and begins the final rear correction.

#### L411 — Biconvex Positive

`nd = 1.49782, νd = 82.57. Glass: J-FKH1 class (HIKARI exact nd/νd pair). f = +106.905 mm.`

L411 restores positive power after the cemented pair and places a high-Abbe positive element near the image side.

#### L412 — Biconcave Negative

`nd = 2.00100, νd = 29.13. Glass: S-LAH99 class (OHARA nd exact; Δνd = +0.01). f = −55.781 mm.`

L412 is the final powered element and the strongest high-index negative corrector in the rear group. OHARA S-LAH99
reproduces the patent index exactly and differs in Abbe number by only +0.01; the class label does not establish Nikon's
procurement source. Despite the substantial standalone powers of L49 through L412, their spaced isolated group EFL is
only +1095.692714 mm.

### Inserted Converter Group Gx — TC 1.4x In

The following eight elements appear only in the supplemental converter-in configuration. The complete inserted group has
isolated EFL −231.726433 mm and comprises eight elements in four air-separated groups in the patent model.

#### Lx1 — Positive Meniscus

`nd = 1.54814, νd = 45.78. Glass: S-TIL1 class (OHARA nd exact; Δνd = +0.01). f = +61.221 mm.`

Lx1 is the first positive unit encountered after G4C. It begins the converter with moderate positive power before the
three cemented assemblies that follow.

#### Lx2 + Lx3 — Cemented Pair

`Lx2: nd = 1.78605, νd = 40.63. Glass: 786406 lanthanum crown/flint class (catalog unresolved). f = +43.534 mm.`  
`Lx3: nd = 1.80610, νd = 33.27. Glass: J-LASFH6 class (HIKARI nd exact; Δνd = +0.07). f = −37.950 mm.`

Although the standalone powers are nearly opposed, the cemented interface and thickness yield a net EFL of
−372.196849 mm. This weak negative unit contributes to the converter's overall negative power without concentrating the
entire conversion in one surface pair.

#### Lx4 + Lx5 + Lx6 — Cemented Triplet

`Lx4: nd = 2.00100, νd = 29.13. Glass: S-LAH99 class (OHARA nd exact; Δνd = +0.01). f = −25.379 mm.`  
`Lx5: nd = 1.72047, νd = 34.71. Glass: S-NBH8 class (OHARA exact nd/νd pair). f = +20.930 mm.`  
`Lx6: nd = 1.88300, νd = 40.66. Glass: J-LASF08A class (HIKARI nd exact; Δνd = +0.03). f = −21.800 mm.`

The triplet has net EFL −27.971195 mm and is the strongest negative unit inside Gx. Its alternating negative–positive–
negative power distribution and high indices allow a compact conversion section with internal dispersion balancing.

#### Lx7 + Lx8 — Cemented Pair

`Lx7: nd = 1.72047, νd = 34.71. Glass: S-NBH8 class (OHARA exact nd/νd pair). f = +19.011 mm.`  
`Lx8: nd = 1.72916, νd = 54.61. Glass: J-LAK18 (Hikari catalog equivalent; production supplier unspecified). f = −21.405 mm.`

The final converter pair has net EFL +89.364237 mm. It partially restores positive power after the negative triplet and
conditions the beam entering G4D.

## Glass Identification and Selection

The patent supplies d-line refractive indices and Abbe numbers but does not name glass vendors. The data files therefore
use vendor-class labels only where an authoritative catalog reproduces the coordinate pair, and retain six-digit class
labels where no defensible public match was found. A catalog-class match does not establish the glass actually procured
for the patent prototype or production lens.

| Glass or class | nd | νd | Elements in complete TC-in model |
| --- | ---: | ---: | --- |
| Fluorite (CaF2; production-correlation supported) | 1.43385 | 95.23 | L11 |
| J-FKH1 class (HIKARI exact nd/νd pair) | 1.49782 | 82.57 | L12, L15, L22, L24, L32, L411 |
| S-NBH8 class (OHARA exact nd/νd pair) | 1.72047 | 34.71 | L13, Lx5, Lx7 |
| J-LASF016 (Hikari catalog equivalent; production supplier unspecified) | 1.77250 | 49.62 | L14 |
| J-LAFH3 class (HIKARI exact nd/νd pair) | 1.79504 | 28.69 | L16 |
| J-BK7 (Hikari catalog equivalent; production supplier unspecified) | 1.51680 | 63.88 | L17 |
| J-LAK18 (Hikari catalog equivalent; production supplier unspecified) | 1.72916 | 54.61 | L18, Lx8 |
| TAFD33 (Hoya catalog equivalent; production supplier unspecified) | 1.88100 | 40.14 | L21 |
| 804238 very-dense flint class (catalog unresolved) | 1.80379 | 23.82 | L23 |
| J-LAK14 (Hikari catalog equivalent; production supplier unspecified) | 1.69680 | 55.52 | L31 |
| J-LASFH24 (Hikari catalog equivalent; production supplier unspecified) | 1.90200 | 25.26 | L33 |
| S-LAH98 class (OHARA exact nd/νd pair) | 1.95375 | 32.32 | L41 |
| J-SK12 (Hikari catalog equivalent; production supplier unspecified) | 1.58313 | 59.42 | L42 |
| 815233 dense flint class (catalog unresolved) | 1.81511 | 23.33 | L43 |
| 633315 flint class (catalog unresolved) | 1.63288 | 31.50 | L44 |
| 726548 lanthanum crown class (catalog unresolved) | 1.72567 | 54.80 | L45 |
| S-LAH95 class (OHARA nd exact; Δνd = +0.03) | 1.90366 | 31.31 | L46 |
| 690570 crown class (catalog unresolved) | 1.68991 | 56.97 | L47 |
| 819287 dense flint class (catalog unresolved) | 1.81945 | 28.67 | L48 |
| S-TIL1 class (OHARA nd exact; Δνd = +0.01) | 1.54814 | 45.78 | Lx1 |
| 786406 lanthanum crown/flint class (catalog unresolved) | 1.78605 | 40.63 | Lx2 |
| J-LASFH6 class (HIKARI nd exact; Δνd = +0.07) | 1.80610 | 33.27 | Lx3 |
| S-LAH99 class (OHARA nd exact; Δνd = +0.01) | 2.00100 | 29.13 | Lx4, L412 |
| J-LASF08A class (HIKARI nd exact; Δνd = +0.03) | 1.88300 | 40.66 | Lx6 |
| 806418 lanthanum flint class (catalog unresolved) | 1.80592 | 41.79 | L49 |
| 627376 flint class (catalog unresolved) | 1.62730 | 37.62 | L410 |

The repeated 498826 coordinate supplies high-Abbe material in the front group, both moving zoom groups, and the rear
master. Dense and very-high-index glasses supply compact opposite power in the cemented pairs. This distribution supports
a deliberate chromatic-correction strategy, but the patent's `nd`/`νd` values alone do not identify all Nikon-marketed ED
elements. Nikon's statement that the production main lens contains eight ED elements remains product metadata rather
than a one-to-one assignment to patent labels.

Only L11 and L12 carry patent-direct anomalous-partial-dispersion evidence. The data files do not contain `nC`, `nF`, or `ng`
because the patent does not publish those line indices. No unqualified APO claim is therefore made for either optical
configuration.

## Focus Mechanism

The patent assigns focusing to the negative cemented G1B pair, L16+L17, while the surrounding G1A and G1C subgroups
remain fixed (¶0098). The source does not publish finite-focus spacings. Both data files therefore use a
`CONSTRAINED_RECONSTRUCTION` at Nikon's marketed 2.0 m minimum focus distance measured from the image plane.

Only the two air gaps adjacent to G1B change, and their sum remains exactly 34.399 mm. The converter-out and converter-in
focus positions are solved separately because Gx changes the finite-conjugate relation.

| Configuration and zoom state | G1B imageward shift (mm) | Front gap, infinity → close (mm) | Rear gap, infinity → close (mm) | Computed close magnification |
| --- | ---: | ---: | ---: | ---: |
| TC out, 183.6 mm | 19.898423 | 6.984 → 26.882423 | 27.415 → 7.516577 | −0.117801 |
| TC out, 300.0 mm | 19.906745 | 6.984 → 26.890745 | 27.415 → 7.508255 | −0.192501 |
| TC out, 392.0 mm | 19.909432 | 6.984 → 26.893432 | 27.415 → 7.505568 | −0.251543 |
| TC in, 257.052 mm | 20.124738 | 6.984 → 27.108738 | 27.415 → 7.290262 | −0.165563 |
| TC in, 420.020 mm | 19.991463 | 6.984 → 26.975463 | 27.415 → 7.423537 | −0.270183 |
| TC in, 548.825 mm | 19.958994 | 6.984 → 26.942994 | 27.415 → 7.456006 | −0.352869 |

The modeled tele-end magnitudes, 0.2515x without Gx and 0.3529x with Gx, are close to Nikon's marketed 0.25x and 0.36x
maximum reproduction ratios. They are reconstruction results, not production measurements. The small residuals reflect
the rounded patent prescription, active plate normalization, and the imposed 2.0 m image-plane distance.

## Chromatic Correction Strategy

Table 11 publishes anomalous-partial-dispersion deviations of +0.0649 for L11 and +0.0391 for L12. Both exceed the
patent's condition (2-11) threshold of 0.025, and L11 exceeds the condition (2-12) threshold of 0.045. These values are
stored directly as `dPgF` on the two elements.

G1A places the two documented low-dispersion positives ahead of L13 and the L14+L15 cemented pair. G2 and G3 each combine
a high-Abbe member with a much lower-Abbe, high-index partner. G4 continues this pattern around the stop, VR group, and
rear relay. The converter likewise alternates high-index positive and negative members, especially in the Lx4+Lx5+Lx6
triplet.

This arrangement supports control of longitudinal and lateral color as group conjugates change, but most elements have
only `nd` and `νd`. The available evidence supports discussion of the published anomalous dispersion in L11 and L12 and of
broad dispersion balancing; it does not support a complete line-by-line secondary-spectrum reconstruction of either
configuration.

## Aberration-Correction Strategy

The design assigns zoom, focus, stabilization, and conversion to different optical units. G2 supplies strong negative
variator power, G3 compensates the image position, G1B focuses, G4B stabilizes, and Gx changes focal length. This separation
limits the number of functions imposed on any one moving group.

All surfaces are spherical. Correction therefore depends on distributed power, cemented interfaces, glass dispersion,
and long-range group interactions rather than polynomial aspheres. Several cemented units are deliberately weak in net
power despite strong opposing member powers. L22+L23 is the clearest example: its +3705 mm net focal length allows strong
internal index and dispersion contrast without materially changing the negative character of G2.

Surface-by-surface Petzval accumulation uses `φ/(n·n′)`. The converter-out model gives
+0.000367185836 mm⁻¹, corresponding to a signed radius of −2723.417 mm under `Rp = −1/ΣP`. Inserting Gx changes the sum to
−0.000184963398 mm⁻¹ and the signed radius to +5406.475 mm. This sign reversal is a first-order field-curvature result of
the complete centered prescriptions; it is not a claim about final off-axis image quality.

## Conditional Expressions

The second embodiment defines thirteen conditions. The table compares the patent's Table 11 value with a fresh
calculation from the normalized converter-out TypeScript arrays. The small difference in `Dc/Σ4` results from removing FL1
and retaining its d-line air-equivalent propagation.

| Condition | Patent bound | Table 11 | Active model | Result |
| --- | --- | ---: | ---: | --- |
| `fw/f123w` | `−2.00 < x < 2.00` | 0.311 | 0.311335 | Pass |
| `β3w/β3t` | `0.70 < x < 1.20` | 0.978 | 0.978303 | Pass |
| `β4w` | `−2.00 < x < 2.00` | 0.311 | 0.310874 | Pass |
| `f1/ft` | `0.30 < x < 0.59` | 0.590 | 0.590416 | Source inconsistency |
| `f4/ft` | `0.42 < x < 3.00` | 0.578 | 0.578100 | Pass |
| `(−f1B)/f1` | `0.40 < x < 1.00` | 0.672 | 0.672094 | Pass |
| `Σ1/L1` | `0.30 < x < 1.30` | 0.525 | 0.525024 | Pass |
| `f1C/f1` | `0.70 < x < 1.65` | 1.329 | 1.329132 | Pass |
| `Dc/Σ4` | `0.15 < x < 0.50` | 0.352 | 0.353044 | Pass |
| `Dc/f4` | `0.02 < x < 0.50` | 0.182 | 0.181819 | Pass |
| G1A positive-element `ΔθgF` | `≥ 0.025` | 0.0649; 0.0391 | 0.0649; 0.0391 | Pass |
| Most object-side positive `ΔθgF` | `≥ 0.045` | 0.0649 | 0.0649 | Pass |
| `f1C/fg1` | `> 0.17` | 0.763 | 0.763409 | Pass |

Condition (2-4) is internally inconsistent in the source. Paragraph 0118 gives the strict upper bound `0.59`, Table 11
prints `0.590`, and paragraph 0270 states that all conditions are satisfied. Direct calculation from the published group
focal length and tele focal length gives 231.443/392.000 = 0.590416; the normalized active model gives the same result to
source precision. No prescription value or bound is silently altered. The issue is recorded as a patent-source
contradiction, while the remaining twelve conditions satisfy their printed bounds.

## Image Stabilization

The vibration-reduction subgroup G4B consists of the cemented L43+L44 core and the air-spaced biconcave L45. Its computed
centered isolated EFL is −98.707207 mm. Paragraph 0099 identifies G4B as the preferred subgroup moving with a component
perpendicular to the optical axis.

The data files model only the centered optical state. The selected example does not publish a lateral displacement range,
tilts, or decentered surface coordinates, so no stabilization stroke or correction angle is reconstructed. G4B's position
between the stop-side G4A section and positive G4C relay allows transverse motion to change line of sight while the rear
master remains fixed, but exact off-axis performance during VR motion lies outside the centered sequential model.

## Verification Summary and Modeling Limits

The final TypeScript arrays were recompiled and retraced before authoring. Sequential reduced-angle y–ν matrices and an
independent ordinary-angle ABCD implementation agree to floating-point precision.

| State | Patent EFL (mm) | Computed EFL (mm) | Computed BFL (mm) | Active track (mm) | Modeled f-number |
| --- | ---: | ---: | ---: | ---: | ---: |
| TC out, wide | 183.600 | 183.329809 | 52.841092 | 391.092489 | 4.080000 |
| TC out, middle | 300.000 | 299.590409 | 52.862857 | 391.092489 | 4.081545 |
| TC out, tele | 392.000 | 391.534943 | 52.890425 | 391.091489 | 4.083209 |
| TC in, wide | 257.052 | 258.113085 | 53.281167 | 391.079489 | 5.744300 |
| TC in, middle | 420.020 | 421.911480 | 53.324321 | 391.079489 | 5.748016 |
| TC in, tele | 548.825 | 551.583895 | 53.379016 | 391.078489 | 5.752315 |

The converter-out residuals are −0.15% or less. The converter-in residuals are approximately +0.41% to +0.50%. The
rounded active arrays therefore compute conversion factors of 1.407917, 1.408294, and 1.408773 rather than exactly 1.4.
The published radii, indices, and converter spacings are retained; no corrective scaling is applied.

One physical stop semi-diameter, 17.601593578 mm, is used in both configurations. The per-state `nominalFno` values are
the exact modeled values required to preserve that stop in the rounded active arrays. Nikon's marketed f/4 and f/5.6 and
the patent's printed f-number rows remain separate source values.

The patent publishes the stop station but not surface semi-diameters. Semi-diameters are inferred from exact marginal and
chief-ray envelopes across every zoom state at infinity and reconstructed close focus, with Figures 7 and 9 used as
proportional checks. The smallest modeled element edge thickness is 0.056448 mm at L15, the maximum spherical rim angle is
40.084461° at surface 8, and the smallest shared-band cross-gap clearance is 0.000447 mm at the 21→22 gap. These values are
model geometry, not manufacturing dimensions, bevel allowances, or assembly tolerances.

Same-index bookkeeping planes 10, 16, 29, 30, 40, and 46 or 68 are removed or folded into adjacent spacings as applicable.
Plane plates FL1 and FL2 are excluded, and their d-line propagation is retained through documented air-equivalent
spacings. Sensor cover glass, the production protective plate, filters, and mechanical parts are not included.

No uniform scaling is applied. Because both prescriptions are all-spherical, there is no patent conic convention or
aspheric coefficient transformation to report.

Representative exact spherical rays pass the authored clear apertures without trace, total-internal-reflection, or
containment failures. A small number of outer-pupil samples cannot be launched through the exact stop and are treated as
natural pupil truncation rather than surface-geometry failures.

## Sources

- WO 2019/131993 A1, *Variable Power Optical System, Optical Equipment, and Method for Manufacturing Variable Power
  Optical System*, especially ¶0097–¶0100, Figures 7–9, and Tables 8–11.
- Nikon product specification:
  <https://imaging.nikon.com/imaging/lineup/lens/f-mount/zoom/telephotozoom/af-s_180-400mmf_4e_tc14_fl_ed_vr/>
- Nikon product announcement, 9 January 2018:
  <https://www.nikon.com/company/news/2018/0109_lens_01.html>
- OHARA optical-glass catalog and comparison table:
  <https://www.ohara-inc.co.jp/en/product/01000/> and <https://www.ohara-inc.co.jp/en/product/01002/>
