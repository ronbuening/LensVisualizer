## Patent Reference and Design Identification

**Patent:** US 2012/0307129 A1\
**Application Number:** 13/445,555\
**Priority:** June 6, 2011 (JP 2011-126681)\
**Filed:** April 12, 2012\
**Published:** December 6, 2012\
**Inventors:** Hideki Kai; Makoto Kanai\
**Assignee:** Sony Corporation\
**Title:** *Zoom Lens and Imaging Apparatus*\
**Embodiment analyzed:** Numerical Value Embodiment 1 / Example 1

The modeled prescription is the unscaled Example 1 design from US 2012/0307129 A1, correlated in this project to the **SONY DT 16-50mm f/2.8 SSM** (SAL1650). The correlation is treated as the fixed lens/patent pairing for this analysis, not as a claim that Sony has publicly identified the production lens as this exact patent embodiment.

Several independent characteristics support the selected correlation:

1. The patent design has 16 physical lenses in 13 air-separated groups, exactly matching Sony's published 13-group/16-element construction for SAL1650.
2. Example 1 publishes focal-length stations of 16.48, 28.28, and 48.50 mm at Fno 2.89; Sony markets the production lens as a constant-aperture 16-50 mm f/2.8 zoom.
3. The patent is explicitly directed to a wide-angle interchangeable zoom for a digital single-lens-reflex camera and gives full fields of 85.5°, 54.3°, and 33.0°; Sony specifies the production lens for APS-C A-mount use and publishes an APS-C angle-of-view range of 83°-32°.
4. The patent assigns close-range focusing to the second lens group GR2 (¶¶0009, 0026, 0084). Sony specifies a 0.30 m minimum focus distance and a rounded 0.2× maximum reproduction ratio. The constrained close-focus reconstruction in the data reaches |m| = 0.194595× at the long focal-length station.
5. Example 1 uses two compound aspherical surfaces on G4 and G13 (¶¶0091, 0093, 0097), matching the two hybrid-composite asphere media represented in the data model.

Marketing and design quantities remain deliberately separate. The data stores the production range as 16-50 mm and f/2.8, while the optical model retains the patent's 16.48-48.50 mm design range and Fno 2.89. No uniform prescription scaling has been applied.

Two patent-text inconsistencies are resolved from the numerical tables and Figure 2 rather than silently propagated. Paragraph 0099 names D6, D17, and D24 as the zoom-variable intervals, but Table 4 and the actual group boundaries establish D5, D15, and D22. Paragraph 0093 repeats G15 for the final biconvex lens in GR4; Figure 2 explicitly identifies the final lens as G16, while Table 1's last biconvex surface pair is consistent with the figure. The data and this analysis use D5/D15/D22 and G16.

The patent also states that an unillustrated filter and cover glass lie between GR4 and the image plane (¶0094). Their thicknesses and refractive indices are not published. They are therefore omitted from the sequential model, and no unsupported air-equivalent plate correction is introduced; the published BF values remain the rear-spacing reference.

## Optical Architecture

The prescription is a four-functional-group positive-negative-positive-positive zoom:

- **GR1 (+):** G1-G3, a positive front group containing a cemented negative/positive pair followed by a positive meniscus.
- **GR2 (-):** G4-G8, the negative variator/focus group. G4 carries the first compound asphere, and G7-G8 form a cemented pair.
- **GR3 (+):** G9-G11, a compact positive-positive-negative group immediately behind the aperture stop.
- **GR4 (+):** G12-G16, the rear positive group. G13 carries the second compound asphere, G14-G15 form a cemented pair, and G16 is the final biconvex element.

The aperture stop lies between GR2 and GR3 and, in the patent, moves with GR3 (¶0095). The prescription contains 16 physical lenses in 13 air-separated groups. Because each compound asphere is represented as a thin optically active 1.53420/41.7 layer bonded to a substrate, the TypeScript model contains 18 optical-media entries while preserving `elementCount: 16` and `groupCount: 13`.

At the wide-angle station the patent explains that GR1 and GR2 together behave as a negative front section, while GR3 and GR4 together behave as a positive rear section (¶¶0027-0028). Independent paraxial recomputation gives a GR1+GR2 synthetic focal length of -17.0654 mm and a whole-system EFL of 16.4978 mm at the wide state. The computed back focal distance is 37.3394 mm, longer than the EFL, so the wide configuration satisfies the project's quantitative criterion for calling the layout retrofocus. This agrees with the patent's own description of the wide-end system as a negative-positive retrofocus type.

The patent's term “telephoto end” denotes the long focal-length zoom station and should not be read as a telephoto-form classification. At that station the computed EFL is 48.4873 mm while the total modeled track is 157.24 mm, so `TL/EFL` is well above unity and the system does not meet the project's telephoto-form criterion.

Zooming is represented by four published variable spacings. From wide through intermediate to long focal length, D5 grows from 2.43 to 14.09 to 25.76 mm; D15 contracts from 13.35 to 6.08 to 1.10 mm; D22 contracts from 7.54 to 3.11 to 1.00 mm; and BF grows from 37.34 to 47.98 to 59.87 mm. This reproduces the patent's stated kinematics: the GR1-GR2 interval increases, the GR2-GR3 interval decreases, and the GR3-GR4 interval decreases as focal length increases (¶¶0009, 0026, 0084).

The stop location is a source fact, but its diameter is not. `STO.sd = 6.971 mm` is an inferred wide-state physical stop radius chosen to reproduce the modeled Fno 2.89. Independent pupil inversion gives state-specific physical stop radii of 6.9714, 8.1516, and 9.4947 mm for the three published zoom stations. These radii are modeling results, not patent-published aperture dimensions.

The semi-diameters are likewise modeling inferences. The patent does not publish clear apertures. The stored values were derived from the maximum infinity and reconstructed-close paraxial marginal-plus-chief-ray envelopes at the project's default 0.60 field fraction, with the close-focus field normalized to the 14.40 mm maximum image height printed in patent Figures 3-5. Modest clearance was added where geometry allowed. S27A is the limiting rear asphere at 12.25 mm semi-diameter because the adjacent 2.45 mm S27A-S28 gap constrains the permissible rim geometry.

## Element-by-Element Analysis

The focal lengths quoted below are the data file's independently verified **standalone-in-air** element values. They describe each modeled optical medium in isolation; they are not the net focal lengths of the cemented cells, functional groups, or the complete in-situ zoom system.

### D1 — G1 Negative Meniscus + G2 Biconvex Positive

**G1:** nd = 1.84666, νd = 23.7. Glass: J-SF03 catalog equivalent (patent class 847237; production supplier unspecified). f = -122.94155 mm.\
**G2:** nd = 1.80420, νd = 46.5. Glass: N-LASF44 catalog equivalent (SCHOTT; production supplier unspecified). f = +102.08879 mm.

G1 and G2 form the cemented front cell of GR1 (¶0090). G1 is a negative meniscus with its convex surface toward the object, followed directly by the biconvex positive G2. The pair combines opposite standalone powers at a cemented interface, so neither element's isolated focal length should be treated as the cell's in-situ focal length.

The relatively high index of G2 is directly relevant to the patent's first-group strategy. Conditional expression (3) requires the positive lenses of GR1 to use refractive index above 1.75, and the patent states that this permits strong refraction without forcing excessively steep curvatures, helping to control first-group size and aberration (¶¶0043-0046, 0055-0058).

### G3 — Positive Meniscus

**nd = 1.80420, νd = 46.5. Glass: N-LASF44 catalog equivalent (SCHOTT; production supplier unspecified). f = +97.85381 mm.**

G3 is the rear positive meniscus of GR1, convex toward the object (¶0090), and uses the same d-line coordinate class as G2. Its positive standalone power completes the patent's one-negative/two-positive first-group arrangement. In the assembled lens this group remains fixed internally while its separation from GR2 changes during zooming.

### H1 — G4 Compound Layer + G4 Negative-Meniscus Substrate

**G4 compound layer:** nd = 1.53420, νd = 41.7. Glass: Unmatched (compound-asphere layer; material unspecified by patent). f = -205.55725 mm.\
**G4 substrate:** nd = 1.91082, νd = 35.2. Glass: K-LaSFn23 catalog equivalent (SUMITA; production supplier unspecified). f = -21.52816 mm.

G4 is the front element of the negative GR2 and is described by the patent as a negative meniscus with a compound aspherical surface (¶0091). The data resolves the published 1.53420/41.7 medium at S6A as a thin bonded optical layer ahead of the higher-index 1.91082 substrate rather than collapsing both media into one nominal element. This produces two model entries for one patent-counted physical lens.

The substrate supplies strong negative standalone power at the front of the moving variator/focus group. The compound layer modifies the front surface profile and refractive transition but must be interpreted as part of the hybrid G4 assembly in situ, not as an independent working lens.

### G5 — Biconcave Negative

**nd = 1.88300, νd = 40.8. Glass: S-LAH58 catalog equivalent (OHARA; production supplier unspecified). f = -24.67788 mm.**

G5 is the second negative element in GR2 (¶0091). Its biconcave form reinforces the negative power of the variator group after the compound-asphere G4. Because GR2 is the group whose axial position changes both with zoom and with close focusing, the distribution of power across G4-G8 directly controls how ray height and conjugate position change through the system.

### G6 — Biconvex Positive

**nd = 1.64769, νd = 33.8. Glass: E-FD2 catalog equivalent (HOYA; production supplier unspecified). f = +27.10242 mm.**

G6 introduces a strong positive component inside the otherwise negative GR2 (¶0091). This internal positive power provides an additional degree of freedom for controlling the group rather than relying on a simple stack of negative lenses. The patent emphasizes that GR2 is especially important to zoom-dependent off-axis aberration control because the height of off-axis rays through this group changes substantially with zoom position (¶0032).

### D2 — G7 Biconcave Negative + G8 Biconvex Positive

**G7:** nd = 1.77250, νd = 49.6. Glass: J-LASF016 catalog equivalent (HIKARI; production supplier unspecified). f = -18.78792 mm.\
**G8:** nd = 1.84666, νd = 23.8. Glass: J-SF03 catalog equivalent (HIKARI; production supplier unspecified). f = +32.09372 mm.

G7 and G8 form the cemented rear cell of GR2 (¶0091). Their opposite standalone powers and large Abbe-number contrast supply coupled power and dispersion control without an intervening air gap. The available d-line data are sufficient to describe that primary dispersion contrast, but not to support anomalous-partial-dispersion or apochromatic claims.

Together with G4-G6, this cemented pair completes the negative focusing/variator group immediately ahead of the aperture stop.

### G9 — Biconvex Positive

**nd = 1.80611, νd = 40.7. Glass: NBFD13 catalog equivalent (HOYA; production supplier unspecified). f = +31.16461 mm.**

G9 is the first lens of GR3 and sits directly behind the stop (¶0092). It begins the positive-positive-negative sequence that the patent uses to keep GR3 compact. The patent links this three-lens arrangement to moving the group's principal point toward the object side, reducing total optical length while retaining degrees of freedom for on-axis aberration correction (¶¶0047-0049, 0059-0063).

### G10 — Positive Meniscus

**nd = 1.49700, νd = 81.6. Glass: H-FK61 catalog equivalent (CDGM; production supplier unspecified). f = +70.91781 mm.**

G10 is the second positive lens in GR3, a positive meniscus convex toward the object (¶0092). Its unusually high Abbe number marks it as a low-dispersion coordinate in the patent prescription, but no vendor glass, partial-dispersion value, or line-index set is published. The model therefore retains only the generic 497816 coordinate class and makes no ED or APO attribution.

### G11 — Biconcave Negative

**nd = 1.83481, νd = 42.7. Glass: S-LAH55 catalog equivalent (OHARA; production supplier unspecified). f = -24.45707 mm.**

G11 terminates GR3 as a biconcave negative lens (¶0092). The patent specifically calls for the image-side surface nearest the end of GR3 to be concave so that the emerging bundle remains sufficiently high before entering GR4 (¶¶0050-0052). This is not merely a sign convention in the data: it is part of the patent's stated ray-height management strategy at the GR3-GR4 transition.

### G12 — Biconvex Positive

**nd = 1.49700, νd = 81.6. Glass: H-FK61 catalog equivalent (CDGM; production supplier unspecified). f = +32.40868 mm.**

G12 is the front positive lens of GR4 (¶0093). Its object-side surface is convex, complementing the concave image-side termination of G11. The patent states that this curvature pairing allows the flux leaving GR3 to remain high and then reconverge in GR4 while maintaining the required light level (¶¶0050-0052, 0064-0069).

Like G10 and G15, G12 uses the 1.49700/81.6 low-dispersion coordinate. That repetition is a prescription fact; no catalog-specific ED designation is assigned.

### H2 — G13 Biconcave Substrate + G13 Compound Layer

**G13 substrate:** nd = 1.90366, νd = 31.3. Glass: N-LASF46B catalog equivalent (SCHOTT; production supplier unspecified). f = -72.97715 mm.\
**G13 compound layer:** nd = 1.53420, νd = 41.7. Glass: Unmatched (compound-asphere layer; material unspecified by patent). f = +228.60257 mm.

G13 is the biconcave negative lens in GR4 carrying the second compound asphere on its image-side surface (¶¶0093, 0097). The data models the substrate and its thin bonded 1.53420/41.7 layer as separate optical media because the patent prescription explicitly changes refractive index across S26 before the aspherical exit surface S27A.

The opposite standalone signs of substrate and layer do not imply that the layer functions as an independent positive lens in the assembled zoom. The relevant optical behavior is the combined hybrid element embedded within the positive GR4 group.

### D3 — G14 Biconcave Negative + G15 Biconvex Positive

**G14:** nd = 1.84666, νd = 23.8. Glass: J-SF03 catalog equivalent (HIKARI; production supplier unspecified). f = -31.35274 mm.\
**G15:** nd = 1.49700, νd = 81.6. Glass: H-FK61 catalog equivalent (CDGM; production supplier unspecified). f = +45.48899 mm.

G14 and G15 form the cemented rear pair within GR4 (¶0093). The pair combines opposite power signs with a very large Abbe-number contrast. As with D2, this supports primary dispersion balancing within the cemented cell, but the available d-line-only data do not justify any anomalous-dispersion label.

### G16 — Biconvex Positive

**nd = 1.62004, νd = 36.3. Glass: E-F2 catalog equivalent (HOYA; production supplier unspecified). f = +41.24211 mm.**

G16 is the final biconvex positive lens before the rear spacing to the image plane. Figure 2 explicitly identifies the final lens as G16; Table 1's last biconvex surface pair is consistent with that assignment. The repeated “G15” in paragraph 0093 is treated as a source-text error. G16 provides the final positive standalone element power of GR4 before the published BF interval.

## Glass Identification and Selection

The selected patent publishes only d-line refractive index and Abbe number. It does not identify a glass manufacturer or glass trade name, and it does not supply `nC`, `nF`, `ng`, `PgF`, or `dPgF`. The catalog audit found a compatible existing Sellmeier curve for all 16 physical glass pieces. The data names those resolver-selected equivalents while preserving the patent coordinate and explicitly leaving the production supplier unspecified. The two compound-asphere layers remain unmatched because their chemistry is unpublished.

| Data annotation | nd | νd | Used in | Interpretation |
|---|---:|---:|---|---|
| J-SF03 catalog equivalent (patent class 847237; production supplier unspecified) | 1.84666 | 23.7 | G1 | HIKARI curve used as an optical equivalent; not a production-supplier claim |
| N-LASF44 (SCHOTT), patent class 804465 | 1.80420 | 46.5 | G2, G3 | High-index positive material satisfying the patent's GR1 index condition |
| Unmatched compound-asphere layer | 1.53420 | 41.7 | G4 layer, G13 layer | Patent-specified hybrid-layer coordinate; material identity unpublished |
| K-LaSFn23 (SUMITA), patent class 911352 | 1.91082 | 35.2 | G4 substrate | Very high-index negative variator material |
| S-LAH58 (OHARA), patent class 883408 | 1.88300 | 40.8 | G5 | High-index negative material |
| E-FD2 (HOYA), patent class 648338 | 1.64769 | 33.8 | G6 | Positive component inside GR2 |
| J-LASF016 (HIKARI), patent class 773496 | 1.77250 | 49.6 | G7 | Negative component of D2 |
| J-SF03 (HIKARI), patent class 847238 | 1.84666 | 23.8 | G8, G14 | High-dispersion positive/negative cemented-cell components |
| NBFD13 (HOYA), patent class 806407 | 1.80611 | 40.7 | G9 | Front positive lens of GR3 |
| H-FK61 (CDGM), patent class 497816 | 1.49700 | 81.6 | G10, G12, G15 | Three production-count-correlated ED positions |
| S-LAH55 (OHARA), patent class 835427 | 1.83481 | 42.7 | G11 | Negative rear lens of GR3 |
| N-LASF46B (SCHOTT), patent class 904313 | 1.90366 | 31.3 | G13 substrate | High-index negative rear-group substrate |
| E-F2 (HOYA), patent class 620363 | 1.62004 | 36.3 | G16 | Final positive lens |

Fresh matching against the current OHARA, HOYA, HIKARI, SCHOTT, SUMITA, and CDGM data finds exact or source-precision-near catalog curves, sometimes in more than one vendor family. The selected names make the inspector and spectral model concrete without asserting production melts. Sony describes three ED elements in the production lens; the repeated 1.49700/81.6 positions G10, G12, and G15 map to an ED fluorophosphate class and are therefore tagged `apd: "inferred"`. No patent `dPgF` is invented, and no APO claim is made.

## Focus Mechanism

The patent states that **GR2 alone moves for close-range focusing** (¶¶0009, 0026, 0084) but does not publish a close-focus spacing table. The data therefore marks focus as `CONSTRAINED_RECONSTRUCTION` rather than presenting the close state as source data.

At each of the three published zoom stations, the reconstruction holds GR1, GR3, GR4, the stop, and the image plane fixed; translates only GR2; conserves D5 + D15; and solves the object-to-image paraxial B term to zero for an object plane 0.300 m in front of the sensor/image plane. D22 and BF remain zoom-only spacings and therefore use identical infinity and close values.

| Zoom station | D5 at infinity | D5 at 0.30 m | D15 at infinity | D15 at 0.30 m | Computed |m| |
|---|---:|---:|---:|---:|---:|
| 16.48 mm | 2.430000 | 0.981186 | 13.350000 | 14.798814 | 0.080664× |
| 28.28 mm | 14.090000 | 12.062067 | 6.080000 | 8.107933 | 0.127784× |
| 48.50 mm | 25.760000 | 22.688736 | 1.100000 | 4.171264 | 0.194595× |

At every station the smaller close-focus D5 and larger D15 place GR2 toward the object side relative to its infinity position while preserving the fixed GR1-to-stop separation. The solved imaging residual is at numerical roundoff scale; the largest absolute B residual among the three reconstructed states is approximately 1.1 × 10^-12 mm.

Sony specifies 0.30 m minimum focus and a rounded 0.2× maximum magnification for SAL1650. The long-end reconstruction's 0.194595× magnitude is therefore consistent with the production specification, but it remains a constrained model of the patent mechanism rather than a Sony-published internal focus trajectory.

The product's SSM branding identifies the production autofocus drive family, but the patent prescription does not specify that motor implementation and the LensVisualizer data does not model motor mechanics.

## Aspherical Surfaces

Example 1 has two compound aspherical surfaces: S6 on the object side of G4 and S27 on the image side of G13 (¶¶0097-0098). The data labels them `6A` and `27A` and represents their thin 1.53420/41.7 media explicitly as the G4 and G13 compound layers.

The patent's Equation 1 uses the standard conic form

$$
Z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}+\cdots,
$$

so the tabulated `K` values are used directly; no alternate-conic conversion is required. The patent labels the even-order polynomial coefficients A, B, C, D, and E, corresponding here to A4, A6, A8, A10, and A12.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 6A | 4.4 | 2.35559e-5 | -6.03510e-8 | 3.97207e-10 | -1.64571e-12 | 3.67325e-15 | 0 |
| 27A | 0 | 3.58853e-5 | 1.32515e-8 | 1.07342e-10 | -1.35072e-13 | 0 | 0 |

S6A combines a positive conic constant with alternating even-order polynomial terms; S27A uses a spherical base conic (`K = 0`) plus its polynomial departure. Because several orders contribute simultaneously at useful ray heights, the complete sag expression is the relevant correction profile rather than the sign of any one coefficient in isolation.

The patent explicitly calls both surfaces compound aspheres but does not identify the bonded-layer material or manufacturing process beyond the optical coordinates. The data therefore records the layer material as `Unmatched (compound-asphere layer; material unspecified by patent)` and does not assign a resin trade name.

No scaling is applied to this prescription. Radii, axial spacings, and semi-diameters are modeled in the patent's millimeter scale, and the aspheric coefficients are copied without a scale transformation. Consequently no `A_p / s^(p-1)` adjustment is performed and `K` is unchanged.

## Aberration Correction Strategy

The patent's design rationale is unusually explicit about how the four-group architecture manages size and aberration. At the wide state, the near-adjacent GR1+GR2 combination behaves as a negative front section and the GR3+GR4 combination as a positive rear section, producing the large back focus required by the intended interchangeable-camera application (¶¶0027-0028). As zoom proceeds, the changing height of off-axis rays through GR2 is used as a degree of freedom for controlling zoom-dependent off-axis aberration (¶0032).

Within GR1, the high-index positive glasses are intended to reduce the curvature required for strong refraction, thereby limiting both front-group diameter and aberration sensitivity (¶¶0043-0046). GR3's positive-positive-negative sequence is intended to move the principal point toward the object side and shorten the system while retaining two positive lenses for on-axis correction (¶¶0047-0049, 0059-0063).

The G11/G12 boundary is also deliberate. The concave image-side termination of GR3 allows the emerging flux to diverge while remaining at substantial ray height, and the convex front of G12 then reconverges that flux in GR4 (¶¶0050-0052). Conditional expression (5) constrains the corresponding radii to balance aberration correction against eccentricity sensitivity (¶¶0064-0069).

Finally, the compound aspheres on G4 and G13 add higher-order surface freedom in the negative moving group and rear group. The patent's Figures 3-5 show spherical aberration, astigmatism, distortion, and lateral aberration for the three infinity-focus zoom stations and describe the example as corrected across those states (¶¶0100-0102). The present verification establishes first-order consistency and physical geometry; it does not independently reproduce the patent's full higher-order aberration plots.

## Conditional Expressions

The patent defines six conditions for the preferred design. Recalculation from the completed TypeScript prescription gives the following values; all satisfy their respective inequalities.

| Condition | Patent inequality | Recomputed value | Result |
|---|---|---:|---|
| (1) | 0.95 < |fw12| / fw < 1.2 | 1.0344005 | Pass |
| (2) | 140 < f1 / βt234 < 150 | 146.47623 | Pass |
| (3) | Nd1 > 1.75 | 1.80420 | Pass |
| (4) | TL3 / TLw < 0.095 | 0.08911424 | Pass |
| (5) | 0 < (R3r - R4f) / (R3r + R4f) < 0.55 | 0.24845442 | Pass |
| (6) | 4 ≤ 2 - βw34 - 1/βw34 < 4.1 | 4.00114404 | Pass |

The recomputed values use the rounded radii, spacings, and indices retained in the final data file, so small differences from the rounded values printed in patent Table 9 are expected. In particular, Table 9 reports 145.9 for condition (2), while direct recomputation from the transcribed rounded prescription gives 146.47623; both are well inside the claimed range.

## Verification Summary

Independent sequential y-ν tracing and an ABCD matrix calculation were run from the actual completed TypeScript arrays. The two methods agree to a maximum matrix difference of 1.42 × 10^-14, with unit determinants to floating-point precision.

| Station | Patent f | Computed EFL | Patent BF | Computed BFD | Total track |
|---|---:|---:|---:|---:|---:|
| Wide | 16.48 mm | 16.49784458 mm | 37.34 mm | 37.33942366 mm | 130.17 mm |
| Intermediate | 28.28 mm | 28.29311688 mm | 47.98 mm | 47.96144269 mm | 140.77 mm |
| Long | 48.50 mm | 48.48727839 mm | 59.87 mm | 59.83911806 mm | 157.24 mm |

The EFL residuals are +0.1083%, +0.0464%, and -0.0262% at the three stations. The BFD residuals are -0.00058, -0.01856, and -0.03088 mm. These differences are consistent with recomputation from the patent's rounded prescription values rather than evidence of a hidden scale factor.

The patent's Table 9 lists `TLw = 130.11 mm`, while summing the rounded Table 1 prescription with the Table 4 wide-state variable spacings gives 130.17 mm. The model preserves the published surface and spacing rows rather than altering a gap to force agreement with the separately rounded Table 9 total.

Surface-by-surface Petzval summation using $\phi/(n n')$ gives $\Sigma P = +0.002653541469\ \mathrm{mm}^{-1}$, corresponding under the audit sign convention to an equivalent Petzval radius of -376.8548604 mm.

The inferred semi-diameters also pass the independent geometry checks over all three zoom stations and both infinity and reconstructed-close states. The minimum modeled edge thickness is 0.395269 mm at G16, the largest actual rim angle is 44.95° at S8, the tightest cross-gap margin is 0.037249 mm at S27A-S28, and the minimum non-stop paraxial ray-envelope clearance is 0.100699 mm at S27A in the long close-focus state. These are model-validation quantities, not dimensions published by the patent.

## Sources

- Hideki Kai and Makoto Kanai, **US 2012/0307129 A1**, *Zoom Lens and Imaging Apparatus*, Sony Corporation, published December 6, 2012. Prescription: Numerical Value Embodiment 1 / Example 1, especially Figure 2, Tables 1-4 and 9, and ¶¶0087-0102.
- Sony Corporation, **SAL1650 Specifications / DT 16-50mm F2.8 SSM**, official Sony support specifications: https://www.sony.com/electronics/support/lenses-a-mount-lenses/sal1650/specifications
- Sony Corporation, **2011 α77 / SAL1650 launch press release**, specifying three ED lens elements: https://www.sony.com.hk/press/pdf/20110825_e_2.pdf
- OHARA Inc., **Optical Glass Data — Recommended Glasses (6-digit)**, supplied catalog dated April 2, 2026.
- HOYA Corporation, **Optical Glass Data Table**, supplied catalog dated June 1, 2026.
- HIKARI GLASS CO., LTD., **Optical Glass Data**, supplied workbook containing the June 1, 2025 catalog set.
