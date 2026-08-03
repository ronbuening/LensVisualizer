## Patent Reference and Design Identification

**Patent:** WO 2019/131993 A1  
**Application number:** PCT/JP2018/048415  
**Priority:** JP 2017-255101 and JP 2017-255102, both 29 December 2017  
**Filed:** 28 December 2018  
**Published:** 4 July 2019  
**Inventors:** Mitsuaki Wada; Masashi Yamashita  
**Applicant:** Nikon Corporation  
**Title:** Variable Power Optical System, Optical Equipment, and Method for Manufacturing Variable Power Optical System  
**Embodiment analyzed:** Example 2, the second numerical example of the second embodiment; Figure 10 and Tables 12–14  
**Lens:** NIKON AF-S NIKKOR 180-400mm f/4E TC1.4 FL ED VR  

The data file transcribes the TC-out form of Example 2 and correlates it with the NIKON AF-S NIKKOR 180-400mm f/4E
TC1.4 FL ED VR. This is a production correlation, not a statement that Nikon publicly identified the patent as the
commercial design. The selected example remains fixed throughout the model.

The correlation rests on several convergent features:

1. The patent states design focal lengths of 183.600, 300.000, and 392.000 mm at approximately f/4.08, closely framing
   the marketed 180–400mm f/4 range.
2. The source image height is 21.6 mm, consistent with a 135-format image circle, and the production lens is a Nikon F
   full-frame lens.
3. The patent uses a positive–negative–positive–positive four-group zoom in which G1 and G4 remain fixed while G2 and G3
   move. Nikon's production construction diagram is visually consistent with that fixed-front/fixed-rear arrangement, but
   Nikon does not publicly identify this patent example as the commercial prescription.
4. The negative cemented subgroup G1B is the axial focusing group, while subgroup G4B moves transversely for vibration
   reduction. Those mechanisms correspond to the production lens's internal focusing and VR functions.
5. A large air space between G4F and G4R is reserved for an insertable magnification-conversion group, matching the
   product's built-in teleconverter concept. Example 2, however, does not publish a numerical converter-in prescription.
6. The patent priority date immediately precedes the January 2018 product announcement.

The count evidence is close but not exact. After the project-required removal of filters and inactive planes, the active
model has 26 powered elements in 20 air-separated groups. Nikon's production specification gives 27 elements in 19 groups plus one protective glass for the main lens,
and eight elements in five groups for the converter. Including the patent's internal plane filter would raise its optical-component
count to 27 but would not reconcile the strict group count. The model therefore treats count agreement as supporting rather
than decisive evidence.

No uniform scaling is applied. Marketing values remain separate from the patent design values. The data file models only
the TC-out state; it does not import the sibling example's converter prescription.

## Optical Architecture

The prescription is a four-group positive–negative–positive–positive long-focus zoom. Under the strict `TL/EFL < 1`
definition, none of the published physical states is telephoto: the patent's tele-end physical ratio is
`392.366/392.000 = 1.000934`. The normalized active model likewise gives `391.126489/390.546209 = 1.001486` at tele.
The patent's separate 391.685 mm air-converted total length removes the rear FL2 plate's optical-path effect and is not a
physical track for this classification. No state is retrofocus because the back focal distance remains far shorter than
the effective focal length.

The active model contains 26 spherical elements in 20 air-separated groups. Six cemented pairs are retained as physical
units. There are no aspherical surfaces, diffractive surfaces, folded paths, blockers, or sensor-side cover elements in the
modeled sequence.

The first group G1 is positive, with computed isolated-group EFL +176.9439 mm. It is divided into:

- G1A, a positive front collector with computed focal length +164.6801 mm;
- G1B, a negative cemented internal-focus group with computed focal length −129.1923 mm; and
- G1C, a positive relay element with computed focal length +132.4376 mm.

The patent defines the same positive–negative–positive subdivision and states that G1B moves axially during focusing
(¶0098). This tripartite front group permits a long entrance section while confining focus motion to a comparatively small
cemented unit.

G2 is the negative variator, with computed focal length −40.4635 mm. It moves toward the image side from wide to tele.
G3 is the positive compensator, with computed focal length +67.7268 mm. It also moves imageward, but on a different
trajectory, maintaining the image plane while the magnification of the front zoom section changes. The patent identifies
G2 and G3 as the moving zoom groups and keeps G1 and G4 fixed relative to the image plane (¶0097).

G4 is a very weak positive master section with computed isolated-group EFL +1057.1781 mm. It contains four functional
subgroups:

- G4A is a nearly afocal front section, computed at −10688.0 mm;
- G4B is the negative vibration-reduction subgroup, computed at −82.2252 mm;
- G4C is a positive relay before the converter bay, computed at +89.6806 mm; and
- G4D is a weak positive rear master group, computed at +1236.7834 mm.

The aperture stop lies between L41 and the L42+L43 cemented pair. Its axial station is published; its physical
semi-diameter is inferred. The patent describes G4B as the subgroup that moves perpendicular to the axis and places the
large converter space between the front and rear portions of G4 (¶0099–¶0100).

The 36.995 mm space after L48 is preserved as the converter bay. It contains no converter surfaces in this data file.
This omission is deliberate: the selected numerical example supplies no converter-in radii, thicknesses, indices, or
compensating spacings.

Inactive source planes 10, 16, 35, 45, 54, and 55 are removed. Plane filters FL1 and FL2 are also excluded from the active
sequence, as required for ordinary LensVisualizer models. Their d-line propagation is retained through air-equivalent
spacings of `1.500/1.51680` mm and `2.000/1.51680` mm respectively. The resulting normalized axial track is
391.126489 mm in each infinity-focus zoom state.

## Element-by-Element Analysis

The focal lengths in this section are standalone thick-element focal lengths in air, computed from each element's own two
surfaces and center thickness. They are not the same as cemented-unit power or the element's effective behavior inside the
complete zoom.

### G1A — Positive Front Collector

#### L11 — Biconvex Positive

`nd = 1.43385, νd = 95.23. Glass: Fluorite (CaF2; production-correlation supported). f = +366.097 mm.`

L11 is the first positive collector. Its low index and very high Abbe number identify a fluorite-like material, and the
data file stores the patent's directly published `dPgF = +0.0619`. The production specification independently states that
the commercial lens contains one fluorite element, supporting the material-class correlation without identifying a
particular crystal supplier.

The element carries modest standalone positive power relative to the complete front group. Its main significance is the
combination of large clear aperture, low dispersion, and anomalous partial dispersion at the most object-side position,
where axial color generated by the high-power front section would otherwise be difficult to cancel downstream.

#### L12 — Biconvex Positive

`nd = 1.49782, νd = 82.57. Glass: 498826 - very-low-dispersion crown (catalog identity unresolved). f = +218.896 mm.`

L12 adds stronger positive power than L11 while retaining a high Abbe number. The patent directly gives
`dPgF = +0.0391`, which is stored on the element. The exact catalog identity remains unresolved because the matching
`nd/νd` pair does not reproduce the patent's published partial-dispersion deviation in the inspected catalog snapshot.

The combination of L11 and L12 distributes positive power across two low-dispersion elements rather than concentrating it
in a single strongly curved collector. This is consistent with the patent's chromatic conditions for G1A, but it does not
by itself establish apochromatic correction for the whole lens.

#### L13 — Biconcave Negative

`nd = 1.72047, νd = 34.71. Glass: S-NBH8 class (OHARA exact pair). f = −371.644 mm.`

L13 introduces weak negative power after the two positive low-dispersion collectors. The lower Abbe number gives it a
substantially different dispersion from L11 and L12, allowing the front group to balance axial color while retaining net
positive power.

The S-NBH8 designation is a class-level catalog match to the stored coordinates. The patent does not name OHARA or prove
that the production element used that catalog glass.

#### L14 + L15 — Cemented Meniscus Pair

`L14: nd = 1.77250, νd = 49.62. Glass: 773496 - lanthanum crown/flint class. Standalone f = −170.264 mm.`  
`L15: nd = 1.49782, νd = 82.57. Glass: 498826 - very-low-dispersion crown (catalog identity unresolved). Standalone f = +129.635 mm.`

L14 is a negative meniscus and L15 a positive meniscus sharing the cemented interface at source surface 8. Their
standalone powers are comparatively strong and opposite, but the cemented unit has a weak net focal length of
+601.652 mm. The distinction matters: neither standalone focal length describes the behavior of the bonded pair.

The pair completes G1A and provides a compact means of combining shape correction with dispersion contrast. Its weak net
positive power supplements the collector while limiting the amount of additional front-group power placed near the focus
module.

### G1B — Negative Cemented Internal-Focus Group

#### L16 + L17 — Cemented Focus Pair

`L16: nd = 1.84666, νd = 23.78. Glass: 847238 - dense flint class. Standalone f = +351.715 mm.`  
`L17: nd = 1.55298, νd = 55.07. Glass: J-KZFH4 (Hikari). Standalone f = −94.536 mm.`

L16 and L17 form the moving focus group. The pair's cemented-unit EFL is −129.192 mm, matching the computed G1B EFL
because the pair constitutes the complete subgroup. The high-index, low-Abbe L16 is individually weakly positive,
while L17 supplies the dominant negative power.

The cemented construction reduces the number of moving air interfaces and keeps the focus module mechanically compact.
The patent specifically prefers a cemented positive-plus-negative G1B and states that the subgroup moves along the axis
for focusing (¶0098). Any statement about motor type belongs to the production mechanism rather than this prescription;
the patent example does not numerically model the AF-S drive.

### G1C — Positive Relay

#### L18 — Biconvex Positive

`nd = 1.58687, νd = 64.71. Glass: Unmatched (nd=1.58687, vd=64.71). f = +132.438 mm.`

L18 is the single-element positive G1C relay behind the moving focus group. Its focal length equals the computed G1C
focal length because the subgroup contains no other powered element.

The element restores positive power after G1B and establishes the beam conditions entering the negative variator. Its
glass remains unmatched rather than being forced to a speculative crown designation.

### G2 — Negative Variator

#### L21 — Plano-Concave Negative

`nd = 1.72672, νd = 54.74. Glass: 727547 - lanthanum crown class. f = −81.580 mm.`

L21 is plano on the object side and strongly concave on the image side. It begins the negative variator and provides a
compact power transition after G1C. The class label is approximate; no exact vendor identity is asserted.

#### L22 + L23 — Cemented Variator Pair

`L22: nd = 1.49782, νd = 82.57. Glass: 498826 - very-low-dispersion crown (catalog identity unresolved). Standalone f = −79.867 mm.`  
`L23: nd = 1.80809, νd = 22.76. Glass: 808228 - very-dense flint class. Standalone f = +107.778 mm.`

The L22+L23 pair combines a negative low-dispersion element with a positive high-dispersion element. Their cemented net
focal length is −307.954 mm, considerably weaker than either standalone element. The bonded unit therefore serves as a
chromatically opposed correction pair within the negative variator rather than as the principal source of G2 power.

Its position between L21 and L24 allows the variator to distribute negative power across three air-spaced units. This
reduces the need for an exceptionally strong single negative lens as G2 moves through a large axial range.

#### L24 — Biconcave Negative

`nd = 1.49782, νd = 82.57. Glass: 498826 - very-low-dispersion crown (catalog identity unresolved). f = −130.354 mm.`

L24 completes G2 with additional negative power in the same high-Abbe material class used for L22. The group as a whole
has computed focal length −40.4635 mm, much stronger than any one cemented unit because the air-spaced negative elements
act together in situ.

### G3 — Positive Compensator

#### L31 — Biconvex Positive

`nd = 1.49782, νd = 82.57. Glass: 498826 - very-low-dispersion crown (catalog identity unresolved). f = +108.503 mm.`

L31 begins the positive compensator. Its high Abbe number helps prevent the moving compensator from introducing excessive
longitudinal color as its conjugates change across the zoom range.

#### L32 + L33 — Cemented Compensator Pair

`L32: nd = 1.69680, νd = 55.52. Glass: 697555 - lanthanum crown class. Standalone f = +59.601 mm.`  
`L33: nd = 1.80809, νd = 22.76. Glass: 808228 - very-dense flint class. Standalone f = −87.332 mm.`

The L32+L33 pair has a net focal length of +177.981 mm. L32 contributes strong positive standalone power, while L33 is a
negative meniscus with substantially lower Abbe number. Their cemented combination provides positive net power with
internal chromatic opposition.

Together with L31, the pair yields G3's computed +67.7268 mm focal length. The group follows a non-linear imageward path
while G2 moves, providing the compensating action required to hold the image plane.

### G4A — Front Master Section and Stop Region

#### L41 — Plano-Concave Negative

`nd = 1.67517, νd = 28.35. Glass: Unmatched (nd=1.67517, vd=28.35). f = −147.548 mm.`

L41 is the negative leading element of G4A. The aperture stop follows its plane rear surface. This places a negative lens
immediately before the stop and the L42+L43 positive cemented unit after it, producing a nearly afocal G4A section.

The glass is left unmatched because the inspected catalogs did not support a defensible exact identity.

#### L42 + L43 — Cemented Pair Behind the Stop

`L42: nd = 1.95375, νd = 32.32. Glass: 954323 - very-high-index lanthanum glass class. Standalone f = −92.596 mm.`  
`L43: nd = 1.61817, νd = 62.52. Glass: 618625 - crown class. Standalone f = +60.089 mm.`

The pair has net focal length +170.066 mm. L42 is a high-index negative meniscus; L43 is a positive biconvex crown. The
large index and dispersion contrast permits strong internal correction while retaining positive net power.

Combined with L41, G4A is computed at approximately −10.688 m and is therefore close to afocal. Its function is better
understood through beam conditioning around the stop and VR section than through its tiny net power alone.

### G4B — Negative Vibration-Reduction Subgroup

#### L44 + L45 — Cemented VR Core

`L44: nd = 1.80931, νd = 22.78. Glass: J-SFH1 catalog equivalent (Hikari; production supplier unspecified). Standalone f = +61.077 mm.`  
`L45: nd = 1.74400, νd = 44.72. Glass: S-LAM2 catalog equivalent (OHARA; production supplier unspecified). Standalone f = −40.673 mm.`

The cemented pair has net focal length −121.382 mm. Although L44 is individually positive, the stronger negative L45
makes the bonded core negative. The pair forms the front part of the transversely moving VR subgroup.

#### L46 — Biconcave Negative

`nd = 1.49782, νd = 82.57. Glass: 498826 - very-low-dispersion crown (catalog identity unresolved). f = −262.167 mm.`

L46 adds weak negative power behind the cemented core. The complete G4B subgroup has computed focal length −82.2252 mm,
stronger than the cemented core alone because of the air-spaced interaction with L46.

The patent assigns this subgroup the vibration-reduction displacement perpendicular to the optical axis (¶0099). The
data file models the centered prescription only; no numerical decenter range is published or invented.

### G4C — Positive Relay Before the Converter Bay

#### L47 — Biconvex Positive

`nd = 1.80809, νd = 22.76. Glass: 808228 - very-dense flint class. f = +175.384 mm.`

L47 begins the positive relay after the negative VR group. Its relatively high index allows moderate positive power with
limited center thickness.

#### L48 — Positive Meniscus

`nd = 1.80809, νd = 22.74. Glass: 808227 - very-dense flint class. f = +183.266 mm.`

L48 is a separate positive meniscus of nearly the same optical coordinate class as L47. The two air-spaced elements form
G4C, computed at +89.6806 mm. Their combined role is to re-converge the beam before the 36.995 mm converter bay.

The small Abbe-number difference between the two labels is preserved. They are not collapsed into a single catalog glass
because the patent stores distinct values.

### G4D — Rear Master Group

#### L49 — Biconvex Positive

`nd = 1.70119, νd = 50.11. Glass: Unmatched (nd=1.70119, vd=50.11). f = +66.875 mm.`

L49 is the leading positive element of the rear master group. It receives the beam after the converter bay and provides
the principal positive standalone power in G4D.

The source places plane filter FL1 after L49. That filter is excluded from the model, and its propagation is folded into
the following air-equivalent spacing.

#### L410 — Biconcave Negative

`nd = 1.92119, νd = 23.96. Glass: FDS24 (HOYA). f = −33.809 mm.`

L410 is the strongest standalone negative element in the rear group. Its very high index and low Abbe number make it an
important counter-power and chromatic partner to L49 and L411. HOYA's FDS24 catalog row reproduces the stored coordinate
pair and supplies the modeled dispersion curve.

#### L411 — Biconvex Positive

`nd = 1.52551, νd = 49.46. Glass: Unmatched (nd=1.52551, vd=49.46). f = +79.266 mm.`

L411 is the final powered element and restores positive power after L410. G4D has an isolated spaced-group EFL of
+1236.783 mm despite the strong standalone powers of its three elements, illustrating the difference between isolated
element power and spaced-group behavior.

The rear FL2 plate and inactive spacing planes are omitted. Their optical path is represented in the final
71.210565 mm air-equivalent spacing from surface 53 to the modeled image plane.

## Glass Identification and Selection

The patent supplies `nd` and `νd` but does not name glass vendors. The data file therefore uses exact catalog classes,
six-digit coordinate codes, or explicit `Unmatched (...)` labels. A catalog match indicates coordinate agreement; it does
not prove procurement identity for the patent or production lens.

| Glass or class | nd | νd | Elements | Status and modeled role |
| --- | ---: | ---: | --- | --- |
| Fluorite (CaF2) | 1.43385 | 95.23 | L11 | Material class supported by production correlation; direct `dPgF` |
| 498826 - very-low-dispersion crown | 1.49782 | 82.57 | L12, L15, L22, L24, L31, L46 | Catalog identity unresolved; L12 alone has direct `dPgF` |
| S-NBH8 class (OHARA exact pair) | 1.72047 | 34.71 | L13 | Exact OHARA coordinate pair; vendor identity not established |
| 773496 - lanthanum crown/flint class | 1.77250 | 49.62 | L14 | Class-level assignment |
| 847238 - dense flint class | 1.84666 | 23.78 | L16 | Near catalog class; used in focus pair |
| J-KZFH4 (Hikari) | 1.55298 | 55.07 | L17 | Exact vendor coordinate and coefficient row; focus-pair negative member |
| Unmatched | 1.58687 | 64.71 | L18 | No defensible public identity |
| 727547 - lanthanum crown class | 1.72672 | 54.74 | L21 | Approximate class assignment |
| 808228 - very-dense flint class | 1.80809 | 22.76 | L23, L33, L47 | Near-exact class assignment |
| 697555 - lanthanum crown class | 1.69680 | 55.52 | L32 | Exact coordinate candidate |
| Unmatched | 1.67517 | 28.35 | L41 | No defensible public identity |
| 954323 - very-high-index lanthanum glass class | 1.95375 | 32.32 | L42 | Exact/near-exact class assignment |
| 618625 - crown class | 1.61817 | 62.52 | L43 | Soft class assignment |
| J-SFH1 catalog equivalent (Hikari) | 1.80931 | 22.78 | L44 | Compatible public curve; production supplier unspecified |
| S-LAM2 catalog equivalent (OHARA) | 1.74400 | 44.72 | L45 | Near-exact public curve; production supplier unspecified |
| 808227 - very-dense flint class | 1.80809 | 22.74 | L48 | Exact coordinate candidate |
| Unmatched | 1.70119 | 50.11 | L49 | No defensible public identity |
| FDS24 (HOYA) | 1.92119 | 23.96 | L410 | Exact catalog coordinate and coefficient row |
| Unmatched | 1.52551 | 49.46 | L411 | No defensible public identity |

The repeated 498826 material is used in both positive and negative elements across G1, G2, G3, and G4B. Its high Abbe
number supports low-dispersion correction, but the data does not equate every occurrence with a specific Nikon-marketed
ED element. The production specification's statement of eight ED elements is product metadata; the patent table and
available line data do not provide a defensible one-to-one mapping for all eight.

The six cemented pairs repeatedly combine high- and low-dispersion members while keeping the bonded unit's net power
moderate. This pattern is especially clear in L22+L23 and L32+L33. It permits dispersion balancing within moving groups,
where large uncancelled chromatic changes would otherwise vary with zoom position.

## Focus Mechanism

The focus system is an internal-focus design using the negative cemented G1B pair, L16+L17. G1A and G1C remain fixed
within the front assembly while G1B moves toward the image side for closer objects, as stated by the patent (¶0098).

The patent publishes the mechanism but no finite-focus spacing table. The data file therefore uses a
`CONSTRAINED_RECONSTRUCTION`, solved from the final normalized surface arrays at Nikon's marketed 2.0 m minimum focus
distance measured from the image plane. Only the two air gaps adjacent to G1B change, and their sum remains exactly
32.030 mm at each zoom position.

| Zoom state | G1B imageward shift | Gap before G1B, infinity → close | Gap after G1B, infinity → close | Computed close magnification |
| --- | ---: | ---: | ---: | ---: |
| 183.6 mm | 19.705834 mm | 6.677000 → 26.382834 mm | 25.353000 → 5.647166 mm | −0.120923 |
| 300.0 mm | 19.773233 mm | 6.677000 → 26.450233 mm | 25.353000 → 5.579767 mm | −0.197654 |
| 392.0 mm | 19.790400 mm | 6.677000 → 26.467400 mm | 25.353000 → 5.562600 mm | −0.258296 |

The reconstructed tele magnification is about 0.258× rather than the marketed rounded 0.25×. This difference is not
presented as a production measurement. It follows from the rounded patent prescription, the normalized plate treatment,
and the imposed 2.0 m image-plane distance.

The zoom motion is independent of focus reconstruction. The normalized gaps after surfaces 15, 23, and 28 are the
published wide/mid/tele zoom spacings. G2 moves imageward monotonically, while G3 follows a different imageward trajectory
that maintains focus at the fixed image plane.

## Chromatic Correction Strategy

The strongest direct spectral evidence concerns L11 and L12. The patent defines anomalous partial-dispersion deviation
as the difference between the element's `θgF` and a normal-line expression based on `νd`, using C, F, g, and d wavelengths
of 656.3, 486.1, 435.8, and 587.6 nm. The project stores those published deviations in the `dPgF` field.

L11 carries `dPgF = +0.0619`, and L12 carries `dPgF = +0.0391`. Both satisfy the patent's condition for the positive
lenses in G1A, and L11 also satisfies the stronger condition applied to the most object-side positive element. Complete
`nC`, `nF`, and `ng` values are not published and are therefore absent from the data file.

The front collector combines these two anomalous low-dispersion positives with L13 and the L14+L15 cemented pair. Farther
back, the design repeatedly uses high-Abbe negative or positive elements paired with dense flints. The moving G2 and G3
groups each contain such dispersion opposition, reducing the tendency for chromatic correction to vary strongly with
zoom position.

The available evidence supports discussion of anomalous partial dispersion in L11 and L12 and of a deliberate
low-dispersion strategy. It does not support an unqualified APO claim for the complete lens because most elements lack
line indices or independently validated Sellmeier identities.

## Aberration-Correction Strategy

The patent's principal architectural choice is the separation of functions among moving and fixed subgroups. G2 provides
strong negative variator power, G3 compensates the image position, G1B focuses, and G4B stabilizes. This division avoids
requiring one group to perform several large motions simultaneously.

G4A is nearly afocal and surrounds the stop with a negative element before it and a positive cemented pair after it. That
configuration controls the beam delivered to the negative VR group without adding much net power. G4C then restores
positive convergence before the converter bay, and G4D completes the rear correction.

All surfaces are spherical. The correction therefore depends on power distribution, glass selection, cemented interfaces,
and long air-spaced group interactions rather than polynomial aspheres. The absence of aspheres is a source fact for
Example 2, not an assumption made by the model.

The surface-by-surface Petzval sum is +0.000342994273 mm⁻¹ under the project's `φ/(n·n′)` convention, corresponding to a
signed Petzval radius of −2915.501 mm when `Rp = −1/ΣP`. This small residual is the net result of many large positive and
negative surface contributions and should not be attributed to any one element in isolation.

## Conditional Expressions

The second embodiment supplies thirteen applicable conditions. The values below are recomputed from the normalized active
model. All remain within the patent's stated bounds.

| Condition | Patent bound | Model value | Result |
| --- | --- | ---: | --- |
| `fw/f123w` | `−2.00 < x < 2.00` | 1.019280 | Pass |
| `β3w/β3t` | `0.70 < x < 1.20` | 0.822479 | Pass |
| `β4w` | `−2.00 < x < 2.00` | 1.017490 | Pass |
| `f1/ft` | `0.30 < x < 0.59` | 0.451387 | Pass |
| `f4/ft` | `0.42 < x < 3.00` | 2.696883 | Pass |
| `(−f1B)/f1` | `0.40 < x < 1.00` | 0.730131 | Pass |
| `Σ1/L1` | `0.30 < x < 1.30` | 0.576880 | Pass |
| `f1C/f1` | `0.70 < x < 1.65` | 0.748472 | Pass |
| `Dc/Σ4` | `0.15 < x < 0.50` | 0.333962 | Pass |
| `Dc/f4` | `0.02 < x < 0.50` | 0.034994 | Pass |
| G1A positive-element `ΔθgF` | `≥ 0.025` | 0.0619; 0.0391 | Pass |
| Most object-side positive `ΔθgF` | `≥ 0.045` | 0.0619 | Pass |
| `f1C/fg1` | `> 0.17` | 0.361755 | Pass |

Table 14 prints `fw/f123w = 1.109`, but the same table gives `fw = 183.600 mm` and `f123w = 180.126 mm`;
direct division yields `1.019286`, while the normalized active model gives `1.019280` from its independently
computed G1–G3 group EFL. The model records the recomputed value rather than the internally inconsistent printed result. The correction does not affect the pass/fail outcome.

The normalized `Dc/Σ4` value differs slightly from the raw plate-inclusive patent intermediate because FL1 is omitted and
replaced by d-line air-equivalent propagation. The condition remains comfortably satisfied.

## Image Stabilization

The vibration-reduction subgroup is G4B, comprising the cemented L44+L45 core and the air-spaced negative L46. Its
computed centered focal length is −82.2252 mm. The patent states that at least part of the front portion of G4 moves with
a component perpendicular to the optical axis and identifies G4B as the preferred VR group (¶0099).

The selected data file contains only the centered optical prescription. The patent example does not publish a numerical
lateral displacement range, tilt, or decentered surface table, so none is reconstructed. The analysis therefore describes
the mechanism and centered power distribution without claiming a modeled stabilization stroke or correction angle.

The placement of the negative VR group between a nearly afocal stop section and the positive G4C relay allows transverse
motion to alter line of sight while keeping the rear master group fixed. The patent links this arrangement to reducing
variation in aberrations during vibration correction; the exact off-axis performance remains outside the centered
sequential model.

## Verification Summary and Modeling Limits

The final TypeScript arrays compute Gaussian effective focal lengths of 183.277646, 299.172238, and 390.546209 mm. The
patent headlines are 183.600, 300.000, and 392.000 mm. Residuals grow from −0.176% to −0.371% toward tele. Since the
functional-group powers reproduce the patent closely, the pattern is treated as rounding in the printed radii, indices,
and three-decimal zoom gaps rather than a sign correction.

The computed back focal distances from the last powered surface are 71.003788, 70.851107, and 70.680874 mm. The model
retains a fixed normalized rear spacing rather than reproducing the patent's unexplained state-dependent TL/BF drift.
The printed variable gaps sum to 46.314 mm in every state and all other published spacings are fixed, yet Table 12 reports
increasing total length and back focus at mid and tele. No unpublished variable rear gap is invented. Table 12's
"air-converted" total length converts the rear FL2 plate only; the active model separately converts both omitted plane
plates, FL1 and FL2, into d-line air-equivalent propagation.

The physical stop semi-diameter is inferred as 16.9790248 mm. The modeled per-state `nominalFno` values
4.085203, 4.082846, and 4.077947 preserve that one fixed stop under exact spherical tracing of the rounded active
prescription. Nikon's marketed f/4 and the patent's printed 4.080/4.083/4.083 values remain separate source fields.

Semi-diameters are not published in the patent. They are inferred from exact marginal and chief-ray envelopes at all
three zoom positions, at infinity and reconstructed close focus, and from Figure 10 proportions. The model uses
`gapSagFrac = 1.0` because the rounded 18→19 and 21→22 gaps are nearly rim-contact at the required clear apertures. The
edge-thickness and inter-element-clearance validators remain clean at the adopted apertures. These are model-geometry
results, not manufacturing dimensions or bevel specifications.

A 300 dpi Figure 10 rim audit refined surfaces 7–9 from 42.0/35.71/35.71 mm to 35.6/33.4/33.4 mm and surfaces
11–13 from 37.0/36.5/34.0 mm to 31.1 mm. The revised outlines retain the same sampled on-axis ray-fan pass pattern at
all six zoom/focus states and satisfy the edge, slope, and cross-gap validators.

The normalized model is unscaled. Because Example 2 is all-spherical, no conic convention or aspheric coefficient
transformation applies.

## Sources

- WO 2019/131993 A1, *Variable Power Optical System, Optical Equipment, and Method for Manufacturing Variable Power
  Optical System*, especially Figure 10, Tables 12–14, and ¶0097–¶0100.
- Nikon product specification: <https://imaging.nikon.com/imaging/lineup/lens/f-mount/zoom/telephotozoom/af-s_180-400mmf_4e_tc14_fl_ed_vr/>
- Nikon product announcement, 9 January 2018: <https://www.nikon.com/company/news/2018/0109_lens_01/>
- HIKARI optical-glass catalog workbook: <https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_general_catalog_data.xlsx>
- OHARA optical-glass and comparison catalogs: <https://www.ohara-inc.co.jp/en/product/01000/> and
  <https://www.ohara-inc.co.jp/en/product/01002/>
- HOYA six-vendor glass cross-reference: <https://www.hoyaoptics.eu/glass-cross-reference-index>
- SCHOTT optical-glass catalog downloads: <https://www.schott.com/en-us/products/optical-glass-p1000267/downloads>
- CDGM optical-glass catalog downloads: <https://www.cdgmglass.com/>
- SUMITA optical-glass downloads: <https://www.sumita-opt.co.jp/en/download/>
