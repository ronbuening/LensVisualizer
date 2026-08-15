## Patent Reference and Design Identification

**Patent:** JP 2016-6455 A\
**Application Number:** JP 2014-127232\
**Filed:** 2014-06-20\
**Published:** 2016-01-14\
**Inventor:** Tomoya Koga\
**Applicant:** Ricoh Imaging Company, Ltd.\
**Title:** *Zoom lens system* (変倍レンズ系)\
**Embodiment analyzed:** Numerical Example 2 (Fig. 10; Tables 5–8)

The prescription modeled here is Numerical Example 2 of JP 2016-6455 A. The job card fixes its production correlation to the **PENTAX HD PENTAX-DA 18-50mm f/4-5.6 DC WR RE**. The patent itself does not identify that retail product by name, so the correlation is treated as the selected dataset identity rather than as a manufacturer-confirmed statement.

Several independent points make the fixed correlation technically coherent:

1. Ricoh Imaging specifies the production lens as an APS-C PENTAX K-mount zoom covering 18–50 mm at F4–5.6, with 11 elements in 8 groups and a 0.3 m minimum focusing distance. Numerical Example 2 gives 18.500–48.601 mm at infinity, FNO 3.98–5.74, 11 physical lens members in eight air-separated groups, and published 300 mm close-focus states.
2. The production specification gives 0.23× maximum magnification. Example 2 reaches |β| = 0.242 at the telephoto-end 300 mm state. These values are close but are kept separate as marketing and design quantities.
3. Ricoh's production literature identifies low-dispersion and aspherical optics. Example 2 contains a very-low-dispersion negative member in G1b and a bonded synthetic-resin aspherical layer on physical lens member L12. The production literature does not map those marketing descriptions to patent element labels, so no stronger identification is asserted.
4. The patent application was filed on 2014-06-20, before Ricoh announced the production lens on 2015-02-10. Ricoh later specified a 2015-04-17 release date. The timing is consistent with, but does not by itself prove, the correlation.

No uniform prescription scaling is applied. The model uses **s = 1**, so radii, spacings, image-plane coordinates, and aspherical coefficients retain the selected example's dimensional scale. The marketed 18–50 mm range and the computed infinity-state design EFLs of 18.500561–48.605212 mm therefore remain distinct fields rather than being forced into equality.

The patent's printed publication number is JP 2016-6455 A; the job card uses the zero-padded form JP 2016-006455 A. This is an identifier normalization only. No optical table entry was corrected.

## Optical Architecture

Numerical Example 2 is a **negative–positive–negative–positive four-functional-group zoom** (G1–G4). The patent describes the same architecture for all five examples in ¶0025–¶0032 and states in ¶0055 that Example 2 has the same lens construction as Example 1. The design contains **11 physical lens members in eight air-separated groups**, while the data model contains 12 media/render entries because the glass substrate and bonded resin layer of physical member L12 must be represented separately.

The four functional zoom groups are:

| Functional group | Power | Physical members | Principal role in the published mechanism |
|---|---:|---|---|
| G1 | negative, f = -23.448 mm published | L11 + L12 hybrid + L13 | negative lead group; G1b is the focus subgroup |
| G2 | positive, f = +25.647 mm published | L21 + L22/L23 cemented pair | positive moving zoom group |
| G3 | negative, f = -32.581 mm published | L31/L32 cemented pair | negative moving group; aperture stop moves with G3 |
| G4 | positive, f = +37.671 mm published | L41 + L42/L43 cemented pair | rear positive moving group |

Independent first-order reconstruction from the stored prescription gives -23.447996, +25.646307, -32.581127, and +37.671858 mm for G1–G4 respectively, reproducing Table 8 to within about 0.0012 mm. These are **functional-group** powers and should not be confused with the standalone focal lengths of individual elements or the net power of a cemented subassembly.

The stop is physically between G2 and G3 and is 1.500 mm in front of surface 14. The patent states that it travels with G3 during zooming (¶0025). The axial stop location is therefore a source fact. Its diameter is not: the data model's `STO` semi-diameter of 5.31736 mm is an independently inferred physical aperture selected to reproduce the published F-number states with one common stop.

### Zoom kinematics

The patent's motion diagram and text (¶0026; Fig. 46) define a non-monotonic G1 trajectory. G1 first moves imageward and then reverses toward the object as focal length increases. G2, G3, and G4 move monotonically objectward, while G2 and G4 share the same trajectory.

The reconstructed motion relative to the fixed image plane quantifies that description:

| Reference group | Wide→Mid | Mid→Tele | Wide→Tele |
|---|---:|---:|---:|
| G1 | +7.575 mm | -5.281 mm | +2.294 mm |
| G2 | -7.840 mm | -11.680 mm | -19.520 mm |
| Stop / G3 | -0.500 mm | -5.739 mm | -6.239 mm |
| G4 | -7.840 mm | -11.680 mm | -19.520 mm |

Positive values denote imageward movement. The equal G2 and G4 rows independently reproduce the patent's same-trajectory statement. The stored variable gaps also preserve the invariant `D12 + D16 = 17.681 mm` at all three zoom stations.

The three infinity states satisfy the project's strict retrofocus criterion because the published back focal distance exceeds the computed EFL at wide, mid, and tele positions. The corresponding BFD/EFL ratios are 2.049, 1.434, and 1.182. None of the three states satisfies the project's telephoto criterion `TL/EFL < 1`.

The manufacturer's 41 mm retracted barrel length is a mechanical storage dimension and is not the same quantity as the patent's optical `L`, which is measured from the first refracting surface to the image plane. The retracting barrel mechanism is therefore not represented as an optical surface or spacing state.

## Element-by-Element Analysis

The focal lengths in this section are the standalone thick-element values stored in or verified against the final data model unless a cemented or functional-group value is explicitly identified. Standalone values describe an element or media layer embedded in air for comparison; they do not by themselves describe the element's in-situ contribution inside the zoom.

### L11 — Negative Meniscus, G1a

**nd = 1.80400, νd = 46.6. Glass: 804466 (vendor unresolved). f = -43.454 mm.**

L11 is the single negative member of G1a. Its published group focal length is -43.453 mm, essentially identical to the independently computed standalone value because G1a consists only of this element. The patent identifies the single-member G1a as a means of restraining front diameter while the separate G1b subsystem carries focus motion (¶0034–¶0037).

The meniscus shaping is also directly tied to conditional expression (2). The Example 2 surface radii yield a shaping expression of 2.75370, within the claimed 2.1–3.6 interval. The patent associates this shaping with control of wide-end coma, astigmatism, and distortion (¶0037).

### L12 — Hybrid Biconcave Negative Member

**L12 glass substrate:** nd = 1.49700, νd = 81.6. Glass: 497816 (vendor unresolved). f = -38.656 mm.\
**L12 bonded resin layer:** nd = 1.52972, νd = 42.7. Glass: Unmatched (synthetic resin layer; chemistry unpublished). f = -168.657 mm.

Physical lens member L12 is one hybrid negative lens in the patent, not two physical lenses. The final data model splits it into `L12g` and `L12r` only because the 0.200 mm bonded resin layer is an optically distinct medium and carries the aspherical exit surface. The hybrid substrate-plus-resin assembly has an independently computed net focal length of **-31.334 mm**.

L12 is the negative member of the moving G1b focus subgroup. Its unusually high νd = 81.6 is central to patent conditions (3) and (4), which require the G1b negative member to have substantially lower dispersion than the positive member L13. The patent links this choice to control of lateral and axial chromatic aberration while avoiding excessive element power (¶0038–¶0040).

The outer resin surface is the only aspherical surface in the modeled prescription and is discussed separately below.

### L13 — Positive Meniscus, G1b

**nd = 1.80518, νd = 25.4. Glass: 805254 (vendor unresolved). f = +67.211 mm.**

L13 is the positive partner of L12 in G1b. Its much lower Abbe number gives a νd difference of 56.2 between the G1b negative and positive members, exactly reproducing the patent's Table 21 value for condition (3).

L13's standalone positive focal length does not make G1b positive. The complete separated L12-hybrid + L13 subgroup has a computed focal length of **-62.809 mm**, matching the patent's -62.810 mm. This distinction is important: L13 is individually positive, the L12 hybrid is individually negative, and the **in-situ focus subgroup remains net negative**.

The patent explicitly chooses a two-member G1b rather than a single focusing lens to restrain focus-induced spherical-aberration change, particularly toward the long end (¶0035, ¶0041).

### L21 — Biconvex Positive, Front Member of G2

**nd = 1.61800, νd = 63.4. Glass: 618634 (vendor unresolved). f = +45.882 mm.**

L21 is the air-spaced front positive member of G2. It precedes the cemented L22/L23 pair and contributes to the complete G2 focal length of **+25.646 mm**. Its moderate standalone power should therefore be read as one part of a stronger positive functional group rather than as the group power itself.

G2 is one of the principal zoom-moving groups. The patent's kinematics place it on a monotonic objectward path from wide to tele and, in this embodiment, on the same trajectory as G4.

### L22 + L23 — Cemented Pair in G2

**L22:** nd = 1.48749, νd = 70.2. Glass: 487702 (vendor unresolved). f = +28.286 mm.\
**L23:** nd = 1.84666, νd = 23.8. Glass: 847238 (vendor unresolved). f = -54.040 mm.

L22 and L23 form the rear cemented pair of G2. Their standalone powers are opposite in sign and their Abbe numbers differ substantially. The independently computed cemented-pair net focal length is **+57.095 mm**; after the pair is combined with L21 and its internal separation, the complete functional G2 power becomes **+25.646 mm**.

That difference illustrates why cemented-net and functional-group powers must remain separate. The pair is not simply equivalent to the full G2 group, and neither component's standalone focal length describes the group in situ.

### L31 + L32 — Cemented Negative G3

**L31:** nd = 1.80518, νd = 25.4. Glass: 805254 (vendor unresolved). f = +28.079 mm.\
**L32:** nd = 1.78800, νd = 47.4. Glass: 788474 (vendor unresolved). f = -15.208 mm.

L31 and L32 form all of G3. L31 is individually positive and L32 individually negative, but the cemented combination is strongly negative: the independently computed pair focal length is **-32.581 mm**, which is also the complete G3 focal length because no other powered member belongs to the group.

The stop moves with this pair. That mechanical-optical relationship keeps the stop immediately ahead of G3 while the group translates objectward through the zoom, rather than leaving the diaphragm fixed in body coordinates.

### L41 — Positive Meniscus, Front Member of G4

**nd = 1.61800, νd = 63.4. Glass: 618634 (vendor unresolved). f = +37.816 mm.**

L41 is the principal positive contributor in G4. Its standalone focal length is already close to the complete G4 power, +37.672 mm, whereas the following L42/L43 cemented pair is nearly afocal as an isolated assembly.

The group follows the same zoom trajectory as G2, a specific kinematic relationship stated in claim 9 and ¶0022/¶0026. The shared trajectory is reproduced exactly by the published spacing table.

### L42 + L43 — Rear Cemented Pair in G4

**L42:** nd = 1.52249, νd = 59.8. Glass: S-NSL5 (OHARA catalog equivalent for patent 522598; production supplier unspecified). f = +27.476 mm.\
**L43:** nd = 1.80000, νd = 29.9. Glass: S-NBH55 (OHARA catalog equivalent for patent 800299; production supplier unspecified). f = -27.925 mm.

The two standalone powers are similar in magnitude and opposite in sign. Once cemented with the actual interface curvature and thickness, the pair has a net focal length of approximately **+3104 mm**, making it nearly afocal as an isolated subassembly.

G4 is nevertheless a clearly positive functional group at **+37.672 mm** because L41 supplies most of the group power. The L42/L43 pair should therefore be interpreted principally as a corrective rear pair within G4 rather than as the source of the group's positive power. This is an inference from the computed power distribution, not an explicit patent statement about aberration allocation.

## Glass Identification and Selection

The patent publishes only d-line refractive index `N(d)` and d-line Abbe number `ν(d)` for Numerical Example 2. It does not name a glass manufacturer. The final data therefore retains six-digit coordinate codes derived from the stored `nd`/`νd` pairs rather than assigning a speculative OHARA, HOYA, SCHOTT, HIKARI, SUMITA, or CDGM identity.

A separate catalog audit found several close cross-vendor matches for many coordinates and less uniform matching for some rear-group coordinates. That ambiguity is precisely why vendor names are not stored. The codes below identify the **prescription coordinates**, not the melt source.

| Data glass label | nd | νd | Used in | Interpretation in this model |
|---|---:|---:|---|---|
| 804466 | 1.80400 | 46.6 | L11 | high-index front negative material |
| 497816 | 1.49700 | 81.6 | L12 substrate | very-low-dispersion G1b negative material |
| Unmatched synthetic resin | 1.52972 | 42.7 | L12 bonded layer | unpublished resin chemistry; aspheric layer |
| 805254 | 1.80518 | 25.4 | L13, L31 | high-index, relatively high-dispersion material |
| 618634 | 1.61800 | 63.4 | L21, L41 | positive-group material used in G2 and G4 |
| 487702 | 1.48749 | 70.2 | L22 | high-Abbe positive cemented component |
| 847238 | 1.84666 | 23.8 | L23 | high-index, high-dispersion negative cemented component |
| 788474 | 1.78800 | 47.4 | L32 | negative component of G3 |
| 522598 | 1.52249 | 59.8 | L42 | S-NSL5 catalog equivalent; supplier unspecified |
| 800299 | 1.80000 | 29.9 | L43 | S-NBH55 catalog equivalent; supplier unspecified |

The data file intentionally carries **no authored `nC`, `nF`, `ng`, or `dPgF` fields** because Numerical Example 2 does not publish them. S-NSL5 and S-NBH55 provide verified Sellmeier models for the two source-precision catalog-equivalent coordinates, while the remaining coordinate labels resolve only where the shared catalog rules support them. These equivalents do not establish the production supplier, an apochromatic claim, or a specific ED glass species.

Ricoh's production literature separately states that the retail lens uses super-low-dispersion glass. That is a manufacturer-level product statement; it is not used here to rename a specific Example 2 coordinate as a branded or vendor-defined glass.

## Focus Mechanism

The focus status is **PUBLISHED**. No internal focus reconstruction is used.

The patent makes G1b — physical hybrid L12 plus L13 — the focusing subgroup and moves it toward the object for close focus (¶0027, ¶0034). G1a/L11 remains stationary relative to the rest of G1 during this focus operation. The published variable spacings at all three zoom stations show the mechanism directly: D2 decreases while D7 increases by the same amount, preserving the axial position of the rest of the system.

| Zoom station | D2 infinity | D2 at 300 mm | D7 infinity | D7 at 300 mm | G1b objectward travel |
|---|---:|---:|---:|---:|---:|
| Wide | 12.109 mm | 8.003 mm | 24.316 mm | 28.422 mm | 4.106 mm |
| Mid | 12.109 mm | 8.162 mm | 8.901 mm | 12.848 mm | 3.947 mm |
| Tele | 12.109 mm | 8.052 mm | 2.502 mm | 6.559 mm | 4.057 mm |

In each row, `D2 + D7` is conserved to numerical precision. The movement is therefore a direct transcription of a single translating subgroup rather than a solved or underdetermined floating-focus reconstruction.

The patent's close-focus rows are labeled 300 mm and give β = -0.093, -0.155, and -0.242 at wide, mid, and tele. Independent finite-conjugate tracing of the stored states yields object-to-image distances of 300.264, 300.087, and 300.066 mm and magnifications of -0.09295, -0.15447, and -0.24164. This identifies the source's 300 mm quantity as an object-to-image-plane distance to the precision of the published table.

The production lens specification gives a 0.3 m minimum focusing distance and 0.23× maximum magnification. Those marketed values are consistent with the selected Example 2 but remain separate from its exact β and conjugate data.

Ricoh specifies a built-in DC autofocus motor for the production lens. The dataset does not claim that the patent publication itself specifies that actuator or mechanically proves the retail motor drives precisely the modeled subgroup; the patent establishes the optical focus motion, while the manufacturer establishes the production AF hardware.

## Aspherical Surfaces

The model contains one aspherical surface, `5A`, on the image-side face of the bonded resin layer of physical lens member L12. Patent surface 5 is renamed `5A` only to satisfy the data-file asphere-label convention; its radius and coefficients are unchanged.

Paragraph 0045 defines the rotationally symmetric asphere as

$$
x = \frac{c y^2}{1 + \sqrt{1-(1+K)c^2y^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10} + \cdots
$$

with `K` as the standard conic constant. No κ-to-K or `KA - 1` conversion is required. Example 2 gives `K = 0`, so the base conic is spherical.

The published Table 7 coefficients are:

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 5A | 0 | -4.022×10^-5 mm^-3 | -3.753×10^-8 mm^-5 | -2.039×10^-10 mm^-7 | -2.006×10^-13 mm^-9 |

All published polynomial terms are negative, so the polynomial correction subtracts sag from the positive-radius spherical base as radial height increases. At the model's independently verified **11.8 mm inferred semi-diameter**, the polynomial departure is approximately **-0.9682 mm** and the total sag is +3.7798 mm.

The patent does **not** publish a clear-aperture height for this surface. The 11.8 mm semi-diameter and the quoted departure therefore describe the validated LensVisualizer geometry, not a patent-stated clear aperture.

Because the prescription uses `s = 1`, no aspherical scale transformation is applied. In the general project convention an A_p coefficient would transform as `A_p / s^(p-1)`; here that factor is unity. The zero `A12` and `A14` entries in the data are schema-completion fields rather than additional published coefficients.

## Chromatic Correction Strategy

The patent explicitly uses the dispersion split inside G1b as part of its chromatic-control strategy. Condition (3) requires `ν1bn - ν1bp > 30`, while condition (4) requires `ν1bn > 55`. Example 2 uses νd = 81.6 for the negative L12 substrate and νd = 25.4 for positive L13, giving a difference of 56.2 and satisfying both conditions.

Paragraphs 0038–0040 associate that choice with control of lateral chromatic aberration toward the wide end and axial chromatic aberration toward the long end. They also state that the low-dispersion negative member permits the powers of the two G1b lenses to be moderated, which the patent connects with coma and spherical-aberration control.

The L22/L23 cemented pair likewise combines νd = 70.2 and 23.8, but the patent does not single out that pair in the same way. Its role as an ordinary dispersion-balancing cemented pair is therefore a modeling interpretation rather than a quoted patent claim.

No claim of apochromatic or anomalous-partial-dispersion performance is made. The available prescription carries only d-line `nd` and `νd`, which are insufficient to establish secondary-spectrum behavior by themselves.

## Conditional Expressions

The patent provides eight principal conditional expressions and explains their intended design roles in ¶0036–¶0044. Independent calculation from Example 2 reproduces the rounded Table 21 entries and places every condition inside the claimed interval.

| Condition | Claimed range | Example 2 computed | Patent Table 21 | Result |
|---|---|---:|---:|---|
| (1) `f1a/f1b` | 0.65 < x < 0.78 | 0.69184 | 0.69 | Pass |
| (2) `(RF+RR)/(RF-RR)` | 2.1 < x < 3.6 | 2.75370 | 2.75 | Pass |
| (3) `ν1bn-ν1bp` | x > 30 | 56.2 | 56.2 | Pass |
| (4) `ν1bn` | x > 55 | 81.6 | 81.6 | Pass |
| (5) `f1bp/f1` | -3.2 < x < -2.7 | -2.86637 | -2.87 | Pass |
| (6) `Dab/f1` | -0.55 < x < -0.45 | -0.51642 | -0.52 | Pass |
| (7) `f1/f3` | 0.50 < x < 0.85 | 0.71968 | 0.72 | Pass |
| (8) `f2/f4` | 0.60 < x < 0.75 | 0.68078 | 0.68 | Pass |

Conditions (1), (5), and (6) collectively constrain the split negative first group and the focusing subgroup's power and available travel. Condition (2) constrains L11's meniscus shape. Conditions (3) and (4) govern the dispersion pairing inside G1b. Conditions (7) and (8) control the relative powers of the principal zoom groups. These assignments follow the patent's own explanation rather than being inferred solely from the numerical prescription.

## Verification Summary

The final data model was checked against Numerical Example 2 without altering any published radius, thickness, refractive index, Abbe number, asphere coefficient, zoom spacing, or focus spacing.

At infinity, independent reduced-angle and ABCD calculations give EFLs of **18.500561, 31.894647, and 48.605212 mm** for wide, mid, and tele. The corresponding Gaussian back focal distances are 37.911950, 45.751964, and 57.433596 mm, agreeing with the patent's 37.91, 45.75, and 57.43 mm values to source precision. The two independent first-order methods agree to better than **1×10^-14**.

Petzval curvature was recomputed surface by surface as `φ/(n·n′)`, giving a sum of **+4.417857×10^-3 mm^-1**. This is a computed design diagnostic, not a patent-published field-curvature value.

The stop's **axial placement is published**, but its diameter is not. The model adopts an inferred 5.31736 mm stop semi-diameter obtained from the six published F-number states. That single physical stop gives modeled infinity-state F-numbers of **4.001065, 4.596028, and 5.738280**, which are stored as `nominalFno`. The retail F4–5.6 specification remains a separate marketing field.

All refracting-surface semi-diameters are also **modeling inferences**. Example 2 provides no clear-aperture table. The authored values were constrained by Fig. 10 and ray envelopes and then checked for positive edge thickness, actual rim slope, conic validity, shared-gap intrusion, off-axis ray containment, and render-trim geometry. The smallest computed edge thickness is 0.102740 mm, the largest rim angle is 46.853°, and the largest positive shared-gap intrusion is 0.451743 of the available gap.

No sensor cover glass, filter, inactive dummy plane, flare cutter, mirror, or folded-path surface appears in Numerical Example 2, so no plate omission or air-equivalent compensation is applied. The rear spacing after surface 21 is the patent's zoom-dependent `fB` and is retained explicitly as D21 in the data model.

No numerical source error was corrected. The only source normalization is the zero-padded job-card publication identifier. Surface 5 is relabeled `5A`, surface 13 is represented as the single required `STO`, and the hybrid L12 is split into separate substrate/resin media entries while the physical `elementCount` remains 11.

## Sources and References

1. **JP 2016-6455 A**, Ricoh Imaging Company, Ltd., *Zoom lens system* (変倍レンズ系), published 2016-01-14. Numerical Example 2: Fig. 10; Tables 5–8; architecture and motion ¶0025–¶0035; conditional-expression rationale ¶0036–¶0044; asphere convention ¶0045; Example 2 identification and tables ¶0054–¶0056; condition values Table 21 in ¶0066.
2. **Ricoh Imaging Company, Ltd.**, “HD PENTAX-DA 18-50mm F4-5.6 DC WR RE,” launch announcement, 2015-02-10: https://news.ricoh-imaging.co.jp/rim_info2/2015/20150210_019091.html
3. **Ricoh Imaging**, current product page, “HD PENTAX-DA 18-50mmF4-5.6 DC WR RE”: https://www.ricoh-imaging.co.jp/japan/products/lens/k/standard/hdpentax-da-18-50/
4. **Ricoh Imaging Company, Ltd.**, new-product release-date notice, 2015-03-27; retail release specified as 2015-04-17: https://news.ricoh-imaging.co.jp/rim_info/2015/20150327_019120.html
5. Glass-coordinate screening used current/legacy catalog resources from OHARA, HOYA, SCHOTT, HIKARI, SUMITA, and CDGM. The screening supports retaining coordinate codes and does not establish the actual production glass vendor or melt.
