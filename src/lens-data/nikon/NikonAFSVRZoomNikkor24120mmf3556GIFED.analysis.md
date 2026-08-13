# NIKON AF-S VR ZOOM-NIKKOR 24-120mm f/3.5-5.6 G IF-ED

## Patent Reference and Design Identification

**Patent:** US 2004/0218274 A1
**Application Number:** 10/743,764
**Priority:** JP 2002-381619, December 27, 2002
**Filed:** December 24, 2003
**Published:** November 4, 2004
**Inventor:** Misako Aoki
**Assignee:** Nikon Corporation
**Title:** *Vibration Reduction Zoom Lens System*
**Embodiment analyzed:** Example 2

The prescription modeled here is Example 2 of US 2004/0218274 A1. The production correlation is the one fixed for this lens: the NIKON AF-S VR ZOOM-NIKKOR 24-120mm f/3.5-5.6 G IF-ED. The patent does not state that Example 2 is the commercial product prescription, so the identification is a correlation rather than a manufacturer-confirmed disclosure.

Several independent characteristics converge on that correlation:

1. Nikon identifies the production lens as a Nikon F-bayonet, FX/35mm 24-120 mm zoom with 15 elements in 13 groups, two ED elements, two aspherical elements, internal focusing, and VR.
2. Example 2 is a five-power-group zoom whose physical prescription contains 15 lenses in 13 air-separated physical groups. It has two aspherical surfaces on two physical lens elements, a second-group internal-focus mechanism, and a transversely shifted cemented vibration-reduction doublet.
3. The patent design spans 24.720-116.500 mm at f/3.604-5.903, close to but deliberately distinct from the marketed 24-120 mm f/3.5-5.6 specification.
4. Nikon Japan's archived product page specifies a 0.5 m minimum focus distance throughout the zoom range, while Nikon USA lists 1.6 ft and a 0.21x maximum reproduction ratio. The constrained 0.5 m model derived from the patent's G2-only focus mechanism reaches |m| = 0.209821 at the 116.5 mm node.
5. Nikon's historical account dates the AF-S VR 24-120mm f/3.5-5.6G version to 2003, consistent with the patent's December 2002 priority and December 2003 filing.

The modeled design is not scaled to the marketed 24-120 mm endpoints. All radii, axial spacings, and image-plane distances remain in the patent's native millimeter scale. Consequently the polynomial asphere coefficients are not geometrically rescaled; only the conic-constant convention is converted to the LensVisualizer standard form.

The exact patent design values and the marketed product values remain separate throughout this analysis. The data file records a design focal range of 24.720-116.500 mm and an infinity-state maximum f-number sequence of 3.604, 5.40, and 5.903 at the three patent zoom nodes. Nikon's product identity remains 24-120 mm f/3.5-5.6.

The source transcription preserves the patent rather than silently correcting it. Text extraction introduced spurious extra decimal points in three Table 2 radii; the rendered table gives surface 18 as 27.2189 mm, surface 21 as -19.9954 mm, and surface 29 as -68.9305 mm. These are transcription corrections to parsed text, not changes to the patent. No patent prescription value was otherwise corrected.

Example 2 contains no sensor cover plate, filter, inactive dummy plane, flare-cutter plane, folded path, or mechanical optical plane that needs representation in the sequential model. No plate was omitted that required an air-equivalent rear-spacing correction.

## Optical Architecture

The patent defines a five-power-group zoom in the sequence positive-negative-positive-negative-positive: G1 (+), G2 (-), G3 (+), G4 (-), and G5 (+). This five-group power architecture is distinct from the `groupCount: 13` metadata, which records the 13 air-separated physical lens groups in the 15-element production-format prescription.

Independent paraxial calculation from the final data arrays gives the following in-situ group focal lengths:

| Power group | Computed focal length | Principal role in the modeled system |
|---|---:|---|
| G1 | +83.541693 mm | Positive front collector and wide-field entrance group |
| G2 | -14.935135 mm | Strong negative variator and sole axial focus group |
| G3 | +26.381025 mm | Positive relay containing the aperture stop and VR doublet |
| G4 | -45.343896 mm | Negative relay/correction group |
| G5 | +49.323678 mm | Positive rear imaging group |

The patent states that, from the wide end toward the long end, the G1-G2 spacing increases, G2-G3 decreases, G3-G4 increases, and G4-G5 decreases (¶0038). The final three-node model reproduces those gap changes. When positions are normalized to a fixed image plane, G4 is stationary to the precision of the patent table, while G2 reverses direction around the 70 mm node. That reversal is why all three patent nodes are retained rather than replacing the zoom motion with a single endpoint interpolation.

The second power group is also the focusing group. The patent explicitly states that G2 moves along the optical axis during focusing (¶0039). The final model therefore changes only the air spaces immediately before and after G2 for focus; G3 and every group behind it retain their axial locations for a given zoom setting.

G3 carries the aperture stop near its front and contains the cemented L3A vibration-reduction doublet. The patent's design rationale is unusually explicit here: a VR group near the stop can remain small in diameter, while a compact high-power cemented unit reduces the mass and travel required for transverse stabilization (¶¶0040-0048). The model follows that architecture by assigning stabilization to L3A alone rather than to all of G3.

Under the project's strict terminology, the complete zoom is not a telephoto-form optical system at any of the three modeled nodes because total track divided by EFL remains greater than 1. The ratios are approximately 5.584, 2.256, and 1.458 from wide to long. Only the 24.72 mm state meets the strict retrofocus test `BFD > EFL`, with a computed BFD of 38.511438 mm against a 24.719630 mm EFL. The 70 mm and 116.5 mm states do not meet that test.

The stop position is not numerically tabulated by the patent. Figure 5 places AS in the D14 air space immediately in front of G3. The final model infers a fixed 1.5000 mm separation from STO to surface 15, close to the 1.48497 mm position obtained from a scaled fit to the rendered patent figure. The corresponding base stop semi-diameter, 7.424006 mm, is also a modeling inference: it is solved from the wide-state design f-number of 3.604 at that inferred axial position.

All lens semi-diameters are likewise inferred rather than patent-published. They were derived from the Figure 5 optical section and ray envelopes, then constrained by physical edge thickness, actual rim slope, conic-height limits, shared-gap intrusion, and field containment. They should therefore be read as a validated visualization model of clear apertures, not as manufacturing drawings.

## Element-by-Element Analysis

### L11 + L12 — Front Cemented Pair

**L11:** nd = 1.846660, νd = 23.78. Glass: 847238 dense-flint class, vendor unresolved. Standalone f = -106.093486 mm.
**L12:** nd = 1.755000, νd = 52.32. Glass: 755523 lanthanum-crown class, vendor unresolved. Standalone f = +86.161633 mm.
**Cemented net:** f = +478.256430 mm.

L11 is the negative meniscus at the object side of the cemented pair; L12 is its positive meniscus partner. The two standalone powers are substantial and opposite in sign, but their cemented combination is only weakly positive. That distinction is important: neither standalone focal length describes the behavior of the assembled front pair.

Within G1, the pair acts with L13 to produce a much stronger positive group focal length of +83.541693 mm. The cemented interface therefore serves as part of a broader power and aberration balance rather than functioning as an isolated weak positive doublet in use.

The large difference in Abbe number between L11 and L12 provides an ordinary achromatizing degree of freedom. The stored coordinates support that statement at the level of d-line index and Abbe number only; they do not identify either actual melt vendor and do not establish anomalous partial dispersion.

### L13 — Positive Meniscus

**nd = 1.816000, νd = 46.63. Glass: 816466 high-index lanthanum-crown class, vendor unresolved. Standalone f = +99.854497 mm.**

L13 is the rear positive member of G1. Its comparatively high refractive index permits useful positive power without requiring the strongest curvatures in the front group. In the assembled G1, it converts the weak net power of the L11-L12 pair into the computed +83.541693 mm group power.

At the wide end, G1 also carries the largest clear apertures in the model. The inferred semi-diameters follow the broad front-group envelope shown in Figure 5 rather than being derived from a universal radius-to-aperture rule.

### L21 — Hybrid Negative Meniscus with Bonded Aspheric Layer

**Bonded layer L21r:** nd = 1.553890, νd = 38.09. Glass: Unmatched thin bonded resin/composite layer.
**L21 substrate:** nd = 1.834810, νd = 42.72. Glass: 835427 high-index lanthanum class, vendor unresolved.
**Physical L21 composite:** f = -18.658750 mm.

The patent's Table 2 places a 0.2000 mm medium between coincident-radius surfaces 6 and 7 before the high-index L21 substrate. The prose nevertheless counts L21 as one physical lens, and Nikon's product specification gives 15 total elements. The data model therefore treats the thin medium and the glass substrate as separate optical media while retaining one physical L21 in `elementCount`.

The thin medium is not assigned an optical-glass identity. Its coordinates did not produce a defensible match in the glass audit, while the prescription geometry is characteristic of a bonded hybrid aspheric layer. Calling it a resin/composite layer is therefore a modeling inference, not a patent statement about material technology.

Surface 6A is the first aspherical surface of the prescription. The coincident reference radii at surfaces 6A and 7 allow the aspheric departure to be carried by the thin bonded layer while the substrate begins from the same nominal curvature. This makes L21 both a strong negative member of G2 and one of the two physical aspheric elements that align with Nikon's production specification.

The physical composite power, -18.658750 mm, must not be confused with the power of G2 as a whole. G2 is stronger at -14.935135 mm because L22, L23, and L24 act with L21 in situ.

### L22 — Biconcave Negative

**nd = 1.834810, νd = 42.72. Glass: 835427 high-index lanthanum class, vendor unresolved. Standalone f = -27.688533 mm.**

L22 reinforces the negative power of G2. Its biconcave form and high index make it a compact negative-power contributor within the moving focus/zoom group.

Because G2 moves both as a zoom variator and as the sole focus group, L22's power participates in changes of conjugate without any independent element motion. The model does not assign L22 a floating correction mechanism separate from G2.

### L23 — Biconvex Positive

**nd = 1.784720, νd = 25.68. Glass: 785257 dense-flint class, vendor unresolved. Standalone f = +17.585244 mm.**

L23 is the strongest standalone positive element in G2. Its positive power is embedded between negative L22 and L24, producing a compound negative group rather than a simple stack of negative elements.

Its low Abbe number relative to the neighboring 835427-class negative members adds another chromatic balancing degree of freedom inside the moving group. The analysis does not infer an anomalous-dispersion role from that coordinate alone.

### L24 — Rear Negative Meniscus of G2

**nd = 1.834810, νd = 42.72. Glass: 835427 high-index lanthanum class, vendor unresolved. Standalone f = -30.041890 mm.**

L24 completes G2 and is followed by the long variable D14 space leading to the stop and G3. Its rear radius is -9999.0000 mm, an extremely weak curvature rather than a dummy or plane bookkeeping surface. It is therefore retained as an active refracting surface.

The axial location of L24 is especially important to the focus reconstruction. Close focusing changes the gap before L21 and the total gap after L24 by equal and opposite amounts, translating all of G2 without altering the position of the stop/G3 assembly.

### L3A — L3AN + L3AP Cemented VR Doublet

**L3AN:** nd = 1.805182, νd = 25.41. Glass: 805254 dense-flint class, vendor unresolved. Standalone f = -53.594219 mm.
**L3AP:** nd = 1.497000, νd = 81.61. Glass: 497816 ED fluorophosphate class, vendor unresolved. Standalone f = +23.928810 mm.
**Cemented L3A net:** f = +42.392245 mm.

L3A is the only laterally shifted vibration-reduction unit in the patent. It consists of negative meniscus L3AN cemented to biconvex positive L3AP. The computed cemented focal length of +42.392245 mm reproduces the patent value `f3A = 42.392` to source precision.

The L3AN/L3AP index difference is 0.308182 at the d line, one of the patent's explicit design conditions. The large difference in Abbe number, 25.41 versus 81.61, also gives the cemented pair substantial ordinary chromatic-correction leverage while it is decentered for stabilization. The patent specifically associates the cemented construction with suppression of aberration changes during vibration reduction (¶¶0048-0052).

L3AP's 497816 coordinate is classified as an ED fluorophosphate class. This is a class-level catalog conclusion rather than a vendor identification. No `nC`, `nF`, `ng`, or `dPgF` values are stored, so the model does not make an apochromatic or anomalous-partial-dispersion claim.

The doublet's +42.392245 mm net power is also distinct from the +26.381025 mm in-situ power of G3. L33 and the air spaces within G3 materially alter the behavior of the complete group.

### L33 — Positive Meniscus with Aspherical Object-Side Surface

**nd = 1.516800, νd = 64.10. Glass: 517641/517642 BK7-class crown, vendor unresolved. Standalone f = +64.586010 mm.**

L33 follows the VR doublet and completes G3. Its object-side surface, 18A, is the second aspherical surface in Example 2. The element is a moderate positive meniscus rather than part of the moving VR doublet.

In the model, L33 helps G3 reach a net +26.381025 mm power while leaving the L3A cemented unit compact and independently decenterable. The patent does not assign L33 a separate axial or transverse motion.

The BK7-class label is intentionally generic. Several vendor catalogs occupy essentially the same coordinate region, and the patent does not identify the source melt.

### L41 — Positive Meniscus

**nd = 1.846660, νd = 23.78. Glass: 847238 dense-flint class, vendor unresolved. Standalone f = +32.376383 mm.**

L41 is a positive meniscus inside a power group that is negative overall. Its standalone sign therefore does not describe G4. The following L42 is sufficiently strong and negative to drive the two-element group to a computed -45.343896 mm focal length.

This mixed-sign construction gives G4 correction freedom while the group participates in zoom spacing changes. No separate focus or stabilization motion is assigned to either L41 or L42.

### L42 — Biconcave Negative

**nd = 1.834810, νd = 42.72. Glass: 835427 high-index lanthanum class, vendor unresolved. Standalone f = -19.099341 mm.**

L42 provides the dominant negative power of G4. The 0.1000 mm air gap between L41 and L42 is one of the tightest geometric constraints in the visualization model; the inferred 8.2 mm semi-diameters were selected to maintain positive validated shared-gap clearance.

The G4 axial station is effectively fixed when the patent zoom spacings are referenced to the image plane. This is a computed kinematic result, not an independently stated patent motion law.

### L51 — Biconvex Positive ED-Class Element

**nd = 1.497000, νd = 81.61. Glass: 497816 ED fluorophosphate class, vendor unresolved. Standalone f = +44.474601 mm.**

L51 begins the positive rear group G5. It uses the same high-Abbe coordinate as L3AP. These are the two physical elements in the modeled prescription that align with Nikon's published count of two ED elements.

The relationship is evidence for the production correlation, but it does not identify Nikon's actual glass supplier. Nor does the ED count by itself establish apochromatic correction.

### L52 — Biconvex Positive

**nd = 1.487490, νd = 70.24. Glass: 487702/487704 low-index FK/FSL crown class, vendor unresolved. Standalone f = +58.884053 mm.**

L52 adds moderate positive power behind L51 using a high-Abbe, low-index crown-class coordinate. Together L51 and L52 form the positive core of G5 before the rear negative meniscus.

The 487702/487704 notation deliberately retains class ambiguity. Multiple current catalogs provide nearby equivalents, and the stored `nd`/`νd` pair is the design authority.

### L53 — Rear Negative Meniscus

**nd = 1.846660, νd = 23.78. Glass: 847238 dense-flint class, vendor unresolved. Standalone f = -40.708049 mm.**

L53 closes the prescription with a negative meniscus after the two positive G5 elements. Its negative power moderates the rear-group net to +49.323678 mm and provides another strong index/dispersion contrast near the image side.

Surface 29 is the final refracting surface. Its radius is -68.9305 mm; the apparent extra decimal point in machine-extracted patent text is not present in the rendered Table 2.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. It names no glass manufacturers and gives no per-element C-, F-, or g-line indices and no partial-dispersion deviation. The final data therefore preserves `nd` and `νd` as the authoritative optical coordinates and uses class or six-digit-code labels where cross-vendor catalog matches are non-unique.

| Data-file glass label | nd | νd | Physical use |
|---|---:|---:|---|
| 847238 dense-flint class | 1.846660 | 23.78 | L11, L41, L53 |
| 755523 lanthanum-crown class | 1.755000 | 52.32 | L12 |
| 816466 high-index lanthanum-crown class | 1.816000 | 46.63 | L13 |
| Unmatched bonded resin/composite layer | 1.553890 | 38.09 | L21r modeled layer |
| 835427 high-index lanthanum class | 1.834810 | 42.72 | L21 substrate, L22, L24, L42 |
| 785257 dense-flint class | 1.784720 | 25.68 | L23 |
| 805254 dense-flint class | 1.805182 | 25.41 | L3AN |
| 497816 ED fluorophosphate class | 1.497000 | 81.61 | L3AP, L51 |
| 517641/517642 BK7-class crown | 1.516800 | 64.10 | L33 |
| 487702/487704 low-index FK/FSL crown class | 1.487490 | 70.24 | L52 |

The glass audit found that most of these coordinates can be reproduced by more than one current OHARA, HOYA, HIKARI, Schott, CDGM, or Sumita catalog entry. A vendor-specific name would therefore imply source knowledge that the patent does not provide. The class/code labels are intentionally more conservative.

The 497816 coordinate is the clearest low-dispersion class in the design and occurs in two physical elements, L3AP and L51. Nikon also publishes a count of two ED elements for the production lens. That agreement strengthens the selected patent/product correlation. It does not establish the exact vendor glass and does not support an APO designation without line-index or partial-dispersion evidence.

The design uses repeated high-index flint/lanthanum-class media and several high-Abbe crowns. At the level supported by the data, this palette provides ordinary longitudinal and lateral chromatic correction degrees of freedom across a 5x zoom while also allowing strong positive and negative powers in compact groups. More specific claims about secondary-spectrum correction would exceed the available spectral data.

## Focus Mechanism

The patent states that the second power group G2 moves axially for focusing (¶0039), but Example 2 publishes only infinity-focus zoom spacings. It does not provide finite-distance focus rows. The final focus model is therefore explicitly `CONSTRAINED_RECONSTRUCTION`, not a transcribed close-focus prescription.

The reconstruction uses three constraints that are independently supported:

- G2 is the only axial focus group, as stated by the patent.
- Nikon Japan's archived product page specifies a 0.5 m minimum focus distance throughout the zoom range; Nikon USA lists the rounded equivalent as 1.6 ft.
- Moving one rigid G2 group requires the air gap before G2 to shorten by exactly the amount that the gap after G2 lengthens, leaving G3 and all rear groups fixed at each zoom node.

The solved focus motion is:

| Zoom node | D5 at infinity | D5 at 0.5 m | Total D14 at infinity | Total D14 at 0.5 m | G2 travel toward object |
|---|---:|---:|---:|---:|---:|
| 24.720 mm | 2.1554 mm | 1.002509 mm | 19.4169 mm | 20.569791 mm | 1.152891 mm |
| 70.000 mm | 21.8110 mm | 19.408529 mm | 6.5437 mm | 8.946171 mm | 2.402471 mm |
| 116.500 mm | 34.7047 mm | 30.072659 mm | 2.6783 mm | 7.310341 mm | 4.632041 mm |

At each node, `D5 + D14` is conserved. The finite-conjugate matrix condition `B = 0` is satisfied to numerical precision. The computed paraxial magnifications at 0.5 m are approximately 0.06113x, 0.15428x, and 0.209821x from wide to long.

The long-end value is particularly useful as an external check: Nikon publishes 0.21x maximum reproduction. The residual is about 0.000179 in absolute magnification. This agreement supports the constrained model but does not transform the reconstructed rows into patent-published data.

Because the inserted STO divides D14, the TypeScript variable `14` stores only the object-side portion from surface 14 to the stop. Adding the fixed 1.5000 mm STO-to-surface-15 spacing restores the total D14 values shown above.

No additional internal floating group is modeled. Introducing one would be underdetermined by the selected patent and would contradict the explicit G2-only focus mechanism.

## Aspherical Surfaces

Example 2 has two aspherical surfaces: surface 6 on the bonded L21 layer and surface 18 on L33. In the data file these are labeled `6A` and `18A` to follow the current LensVisualizer surface-label convention.

The patent writes the asphere as

$$
x = \frac{c y^2}{1 + \sqrt{1-K_{pat}c^2 y^2}} + C_4y^4 + C_6y^6 + C_8y^8 + C_{10}y^{10} + C_{12}y^{12},
$$

with $c=1/R$. In this convention, a spherical conic base corresponds to $K_{pat}=1$. LensVisualizer uses the standard denominator containing $1+K$, so the conversion is

$$
K_{LV}=K_{pat}-1.
$$

No geometric scale is applied to this embodiment. The even-order polynomial coefficients therefore retain the patent's numerical values and millimeter-based units; there is no `A_p/s^{p-1}` scaling transformation to apply.

### Surface 6A — Bonded L21 Aspheric Layer

**R = 122.6470 mm; Kpat = -6.2822; KLV = -7.2822.**

| Coefficient | Value |
|---|---:|
| A4 | 4.4929e-6 |
| A6 | 7.4142e-10 |
| A8 | -4.2168e-11 |
| A10 | 1.1193e-13 |
| A12 | 7.0252e-18 |

The positive fourth-order term supplies the dominant low-order polynomial departure, with higher orders refining the peripheral profile. Because this is the outer surface of the 0.2000 mm modeled bonded layer, the asphere is associated with the hybrid L21 construction rather than a separate sixteenth physical production lens.

Its final modeled clear semi-diameter is 14.4 mm. That value is inferred, not published. Geometry verification leaves the thin modeled layer with a positive minimum edge thickness of approximately 0.05518 mm.

### Surface 18A — L33 Object-Side Asphere

**R = 27.2189 mm; Kpat = 1.0063; KLV = 0.0063.**

| Coefficient | Value |
|---|---:|
| A4 | -9.6879e-7 |
| A6 | 2.1207e-8 |
| A8 | -3.8609e-10 |
| A10 | 2.7728e-12 |
| A12 | 0 |

Here the small positive standard conic constant places the conic close to a spherical base, while the polynomial terms supply the principal correction. The negative A4 term is followed by alternating higher-order corrections that reshape the outer zone without requiring a strong conic departure.

The modeled semi-diameter is 7.2 mm. That reduced aperture follows the smaller L33 silhouette in Figure 5 relative to L3A. At that aperture the positive-K conic remains comfortably inside its real-sag domain in every defined state.

## Chromatic Correction Strategy

The patent emphasizes chromatic control most directly in the VR doublet. L3AN and L3AP combine a large d-line index difference, 0.308182, with a large Abbe-number separation, 25.41 versus 81.61. The patent specifically uses the index-difference condition to preserve correction freedom in the decentered stabilization group (¶¶0049-0052).

Elsewhere, the design repeatedly pairs high-index, lower-Abbe negative media with higher-Abbe positive crowns. G1 uses 847238/755523 classes in its cemented pair; G2 mixes 835427 and 785257 classes; G5 combines the 497816 and 487702/487704 high-Abbe classes with a rear 847238 dense flint. These combinations are consistent with ordinary achromatic balancing across multiple zoom groups.

The analysis deliberately stops at that level. No element in the final data carries explicit `nC`, `nF`, `ng`, or `dPgF`, and the vendor identities remain unresolved. The model therefore makes no APO claim and no claim of specifically engineered anomalous partial dispersion.

## Image Stabilization

The defining specialty mechanism in US 2004/0218274 A1 is transverse movement of only the cemented L3A doublet. The patent positions this unit near the aperture stop and describes that location as favorable for keeping the stabilization group small and reducing the amount of decenter required (¶¶0040-0048).

For Example 2, the patent publishes a 0.300 mm transverse shift of L3A at all three zoom nodes. The corresponding image shifts are 0.408 mm at 24.72 mm, 0.600 mm at 70 mm, and 0.652 mm at 116.5 mm. These are source values, not reconstructed motion.

The model retains L3A as a cemented negative-positive pair with a computed net focal length of +42.392245 mm. The full G3 focal length is +26.381025 mm, so the VR doublet and its parent group must not be treated as interchangeable power quantities.

No axial VR compensation or whole-group G3 decenter is added. The data file models the centered optical prescription; the patent's transverse VR values are analytical source facts rather than a user-controlled decentered state in this sequential dataset.

## Conditional Expressions

The patent defines five numerical conditions for the design. Recalculation from the final TypeScript prescription reproduces all five within the stated ranges.

| Condition | Expression | Computed value | Patent table | Result |
|---|---|---:|---:|---|
| 1 | `0.6 < |f3A|/|f3| < 2.6` | 1.606922 | 1.607 | Pass |
| 2 | `0.10 < |N3AN - N3AP|` | 0.308182 | 0.308182 | Pass |
| 3 | `-0.50 < (R2+R1)/(R2-R1) < 0.50` | -0.021567 | -0.022 | Pass |
| 4 | `3.0 < FT*f1/fT < 5.5` | 4.233018 | 4.233 | Pass |
| 5 | `0.40 < |f2|/fW < 0.80` | 0.604172 | 0.604 | Pass |

Condition 1 controls the power relationship between the VR doublet and G3. Condition 2 enforces a substantial d-line index difference between the two cemented VR members. Condition 3 constrains the outer-surface shape factor of L3A. Conditions 4 and 5 control the first- and second-group power relationships to the long- and wide-end system focal lengths.

For condition 3, the full prescription radii 32.4485 and -31.0784 mm give -0.021567. The patent's conditional-expression table rounds those radii to 32.448 and -31.078 mm; both evaluate to -0.022 at the patent's displayed precision. This is a source-precision difference, not a correction.

## Verification Summary

The final data arrays reproduce the patent's first-order infinity states with the following independent paraxial results:

| Node | Patent focal length | Computed EFL | Patent Bf | Computed BFD |
|---|---:|---:|---:|---:|
| Wide | 24.720 mm | 24.719630 mm | 38.5116 mm | 38.511438 mm |
| Mid | 70.000 mm | 69.999921 mm | 51.6341 mm | 51.634387 mm |
| Long | 116.500 mm | 116.500086 mm | 54.5154 mm | 54.515944 mm |

The deviations are below 0.001 mm at all three nodes. An independent ABCD propagation to the patent image plane leaves the source-image focus residual below `1e-5` in all states.

Surface-by-surface Petzval calculation uses `phi/(n*n')`, not a group approximation. The total is +0.0025963883 mm^-1, corresponding to `-1/P = -385.150406 mm` under the sign convention used by the verification model. Because zoom changes air separations rather than surface powers, this Petzval sum is invariant across the three infinity zoom nodes.

The modeled stop and semi-diameters are not patent facts. At the inferred stop location, the wide-state stop semi-diameter of 7.424006 mm reproduces the design f-number of 3.604. The variable maximum-aperture model uses the patent f-number sequence 3.604, 5.40, and 5.903 rather than substituting the marketed f/3.5-5.6 endpoints.

The inferred aperture geometry also remains physically self-consistent in the modeled states. The minimum modeled edge thickness is approximately 0.05518 mm at the bonded L21 layer, the largest actual rim angle is approximately 49.12° at surface 8, the positive-K conic remains real across its clear aperture, and no modeled element surfaces intersect across the defined zoom/focus states. These are model-validation results, not manufacturing tolerances.

Wide-angle off-axis containment is the tightest aperture case. The source full-field paraxial chief ray reaches approximately 99.28% of the modeled surface-8 semi-diameter at the 24.72 mm infinity state. This near-fill is one reason the L21 rear aperture cannot be reduced substantially without introducing modeled vignetting.


## Sources and References

1. Misako Aoki, *Vibration Reduction Zoom Lens System*, US 2004/0218274 A1, Nikon Corporation, published November 4, 2004. Example 2: ¶¶0090-0101, Table 2; general zoom/focus/VR rationale: ¶¶0037-0067.
2. [Nikon USA — AF-S VR Zoom-NIKKOR 24-120mm f/3.5-5.6G IF-ED](https://www.nikonusa.com/p/af-s-vr-zoom-nikkor-24-120mm-f35-56g-if-ed/2145/overview). Used for production identity, Nikon F mount, FX/35mm format, 15-element/13-group count, two ED elements, two aspherical elements, VR, internal focusing, seven diaphragm blades, the current 1.6 ft minimum-focus listing, and 0.21x maximum reproduction ratio.
3. [Nikon Imaging Japan — AF-S VR Zoom-Nikkor 24-120mm f/3.5-5.6G IF-ED](https://nij.nikon.com/products/lineup/nikkor/fmount/af-s_vr_zoom-nikkor_24-120mm_f35-56g_if-ed/). Used for the archived production specification of 0.5 m minimum focus throughout the zoom range, 15 elements in 13 groups, seven diaphragm blades, and the 35mm/FX angle-of-view range.
4. [Nikon Imaging — NIKKOR The Thousand and One Nights No.58](https://imaging.nikon.com/imaging/information/story/0058/). Used for 24-120mm design-lineage context and Nikon's statement that the AF-S VR 24-120mm f/3.5-5.6G version appeared in 2003 with SWM and VR; the article's detailed optical discussion concerns the earlier D-version and is not substituted for the selected patent embodiment.
5. Current OHARA, HOYA, HIKARI, Schott, CDGM, and Sumita optical-glass catalogs as recorded in the accompanying glass audit. These catalogs support class/code-level coordinate comparisons only; they do not identify Nikon's actual melt suppliers for Example 2.
