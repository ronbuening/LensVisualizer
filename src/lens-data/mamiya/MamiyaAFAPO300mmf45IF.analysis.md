## Patent Reference and Design Identification

**Patent:** JP H10-206729 A<br>
**Application Number:** JP H9-010955<br>
**Filed:** 24 January 1997<br>
**Published:** 7 August 1998<br>
**Inventor:** Hideyuki Suga<br>
**Applicant:** Mamiya-OP Co., Ltd.<br>
**Title:** Telephoto Lens (望遠レンズ)
**Embodiment analyzed:** Example 1 / Table 1

The selected production correlation is the **MAMIYA AF APO 300mm f/4.5 IF** for the Mamiya 645 AF system. The patent does not state that Example 1 became this commercial lens, so the identification is a production correlation rather than a manufacturer-confirmed patent mapping. Several independent features converge on that correlation:

1. Example 1 contains eight glass elements, all air-separated, matching the manufacturer's 8-element / 8-group description of the production lens.
2. The patent uses a positive-negative-positive three-functional-group telephoto architecture and focuses by translating the negative two-element middle group internally. The production lens is identified by Mamiya as an IF lens.
3. Example 1 publishes $f=99.84$, f/4.63, and a $13.59^\circ$ full field. Uniform scaling by $s=300/99.84=3.004807692$ places the patent design at the marketed 300 mm focal length while leaving the f-number unchanged; Mamiya's published product specification is 300 mm f/4.5 with an approximately $14^\circ$ field.
4. The unmodified Example-1 focus spacings, after the same scale and paraxial tracing, give a close conjugate of 2.951 m and $|m|=0.1173\times$. These values are close to Mamiya's 3.00 m minimum focusing distance and 0.11× maximum magnification.

The model keeps the commercial and design quantities separate. The marketed specification is 300 mm f/4.5, while the scaled patent design target is 300 mm at f/4.63. Because the patent tabulates refractive indices to only three decimal places, tracing the stored rounded-index prescription gives an EFL of 298.290 mm rather than exactly 300 mm. Substituting the catalog-coordinate class values used only as a source-precision sensitivity check gives 300.037 mm. The discrepancy is therefore treated as patent rounding, not as a prescription correction.

No optical plate, filter, dummy surface, or flare-cutter plane is present in the selected embodiment, so no plate omission or air-equivalent rear-spacing correction is required. All patent dimensions are uniformly scaled by $s=3.004807692$ in the data model. The design is entirely spherical, so there are no aspheric coefficients to transform under scaling.

## Optical Architecture

The patent describes a three-functional-group telephoto lens: positive G1, negative G2, and positive G3. The data model contains eight physical elements and eight air-spaced groups, while the patent's G1/G2/G3 labels are retained as functional annotations rather than as the catalog `groupCount`.

G1 consists of L1-L4 in the order positive, positive, negative, positive. It supplies the principal front-group convergence and contains the two low-dispersion positive elements singled out by the patent for secondary-spectrum control. G2 consists of L5-L6 and has negative net power; it is the internal focusing group. G3 consists of L7-L8 and has positive net power and remains fixed during the published focus movement.

Computed from the final scaled TypeScript arrays, the functional-group focal lengths are +181.060 mm for G1, -193.483 mm for G2, and +650.625 mm for G3. These values describe each functional group in isolation; they do not imply that the same power acts independently in situ once the groups are coupled by the full system spacing.

The scaled surface-1-to-image track is 278.951 mm for the published infinity state. Using the rounded-index modeled EFL, the infinity track gives $TL/EFL=278.951/298.290=0.9352<1$, so the system meets the project's telephoto criterion. Using the patent's scaled design target instead gives 0.9298; the classification is unchanged. The modeled rear air distance is 95.549 mm, well below the modeled EFL, so the construction is not retrofocus.

Aperture stop D is drawn by the patent between r12 and r13 but is not numerically located. The data model therefore treats its position as an explicit modeling inference: the stop is placed at 0.66 of the infinity d12 interval measured from r12 toward r13. A 600-dpi measurement of Fig. 1 gives approximately 0.66. It is fixed relative to G3. The resulting stop semi-diameter, 19.957918 mm, is solved against the rounded-index model so that the modeled infinity aperture is f/4.63.

The patent also omits numerical clear apertures. The surface semi-diameters in the data file are therefore inferred rather than source facts. They were derived from the modeled marginal and chief-ray bundles at infinity and at the published close-focus state and then checked for positive edge thickness, actual rim slope, cross-gap intrusion, and off-axis containment.

## Element-by-Element Analysis

### L1 — Plano-Convex Positive

**nd = 1.488, νd = 70.2. Glass: S-FSL 5 class (OHARA 487702 reference). Standalone f = +262.933 mm.**

L1 is the exposed front collector of G1. Its rear surface is plane in the numerical example, making the element a plano-convex positive lens. The patent specifically distinguishes the first element from the anomalous-dispersion members behind it: because the front element is exposed to ambient conditions, ¶0020 calls for a material that is comparatively resistant to temperature change and physical damage rather than the softer anomalous-dispersion material used in L2 and L4.

The S-FSL 5 identification is a catalog-class match to the patent's rounded $n_d/\nu_d$ coordinates, not a claim about Mamiya's actual glass supplier.

### L2 — Positive Meniscus, Convex to Object

**nd = 1.497, νd = 81.6. Glass: S-FPL51 class (OHARA 497816 reference). Standalone f = +209.484 mm.**

L2 is the first of the two low-dispersion positive members in G1. Patent ¶0020 specifies anomalous-dispersion material for L2 and L4, with high Abbe number and a constrained partial-dispersion ratio, to reduce secondary spectrum. The model therefore treats L2 as patent-indicated anomalous dispersion while keeping its numerical line indices and `dPgF` catalog-derived from the S-FPL51 class reference.

The element's rear surface r4 is one of the front-group surfaces that the patent seeks to make comparatively concentric with the aperture stop. The stated purpose is to reduce the abrupt chief-ray bending and higher-order aberration generation that otherwise occurs as the beam passes from the positive L2 region toward the following negative element.

### L3 — Negative Meniscus, Convex to Object

**nd = 1.613, νd = 44.3. Glass: S-NBM51 class (OHARA 613443 reference). Standalone f = -105.091 mm.**

L3 supplies the principal negative element power inside G1. Its placement between the two positive low-dispersion members helps distribute the front group's net positive power rather than concentrating the negative correction at the rear of the group. The patent explicitly argues that a rear-most negative member would force strongly converging rays through a large negative refraction and would aggravate high-order and coma terms (¶0016).

Surface r5 is also governed by the patent's normalized power condition $0.06<\phi_5 f_1<0.23$. In the final scaled model the corresponding value is 0.109227, within the stated range.

### L4 — Positive Meniscus, Convex to Object

**nd = 1.497, νd = 81.6. Glass: S-FPL51 class (OHARA 497816 reference). Standalone f = +160.992 mm.**

L4 closes the positive front group and repeats the same high-Abbe, anomalous-dispersion glass class as L2. The patent treats L2 and L4 as a deliberate pair for secondary-spectrum suppression rather than as isolated low-dispersion substitutions.

Its rear surface r8 forms the front boundary of the variable d8 air gap. Because focus occurs by translating G2, L4 itself remains fixed while the distance from L4 to L5 increases toward close focus.

### L5 — Biconcave Negative

**nd = 1.540, νd = 59.5. Glass: S-BAL12 class (OHARA 540595 reference). Standalone f = -121.335 mm.**

L5 is the leading negative member of the moving G2 focus group. The patent devotes particular attention to the distribution of negative refraction across this group. It argues that excessive negative action at the large-diameter object-side surface r9 would increase both aberration generation and focus-induced aberration variation. The design instead distributes the negative action through the rear surface of L5 and the rear surface of L6 (¶0013-¶0015).

The L5-L6 air separation is constrained relative to d8. The final model gives $d_{10}/d_8=0.251600$ at infinity, inside both the claimed 0.05-0.7 range and the patent's preferred 0.1-0.35 interval.

### L6 — Positive Meniscus, Convex to Object

**nd = 1.762, νd = 26.5. Glass: S-TIH14 class (OHARA 762265 reference). Standalone f = +329.849 mm.**

L6 is the positive partner within the otherwise negative G2 focus group. Its high index and low Abbe number complement L5 while allowing the two-element group to retain the required net negative power.

The patent requires r12 to be positive. In the scaled model r12 is +120.886 mm. The stated rationale is that this rear-surface form reduces the change in ray exit angle as G2 moves, thereby limiting focus-induced aberration variation. The patent further links the changing negative action at r12 to coordinated changes in spherical aberration and image-surface tilt at close focus (¶0015).

### L7 — Biconvex Positive

**nd = 1.488, νd = 70.2. Glass: S-FSL 5 class (OHARA 487702 reference). Standalone f = +136.328 mm.**

L7 is the positive leading member of fixed rear group G3. Together with L8 it restores positive net power behind the negative focus group. The comparatively weak G3 net focal length of +650.625 mm shows that its function is not simply to act as a second strong collector; it is a rear corrective group whose contribution depends on its position behind G2 and the stop.

L7 uses the same S-FSL 5 class reference as L1. As elsewhere in the data file, this is a coordinate-compatible catalog class and not a supplier attribution.

### L8 — Negative Meniscus, Convex to Image

**nd = 1.713, νd = 53.9. Glass: S-LAL 8 class (OHARA 713539 reference). Standalone f = -120.652 mm.**

L8 is the final negative meniscus. Patent ¶0021 explicitly requires the image-side radius r16 to be negative so that the final surface has positive refractive action in the patent's sign convention and suppresses an increase in pincushion distortion that could otherwise result from placing a negative element at the rear of G3.

The scaled r16 is -335.977 mm, satisfying that sign condition. L8 therefore combines negative standalone element power with a rear-surface contribution chosen to moderate the system's distortion balance; those are distinct statements and should not be conflated with the element's isolated focal length.

## Glass Identification and Selection

The patent supplies rounded $n_d/\nu_d$ coordinates but no supplier names. The data file therefore uses OHARA catalog entries as class references selected by coordinate agreement. The actual production supplier remains unresolved. Every stored class reference lies within the LensVisualizer glass-resolution coordinate window, and the explicit line indices in the data file match the catalog reference values used for verification.

| Elements | Catalog-class reference | nd / νd in model | nC | nF | ng | dPgF | Interpretation |
|---|---|---:|---:|---:|---:|---:|---|
| L1, L7 | S-FSL 5 / 487702 | 1.488 / 70.2 | 1.48534 | 1.49228 | 1.49596 | +0.0022 | High-Abbe crown-class material |
| L2, L4 | S-FPL51 / 497816 | 1.497 / 81.6 | 1.49514 | 1.50123 | 1.50451 | +0.0280 | Patent-designated anomalous-dispersion pair |
| L3 | S-NBM51 / 613443 | 1.613 / 44.3 | 1.60925 | 1.62311 | 1.63091 | -0.0065 | Negative front-group partner |
| L5 | S-BAL12 / 540595 | 1.540 / 59.5 | 1.53719 | 1.54627 | 1.55122 | -0.0012 | Negative focus-group glass class |
| L6 | S-TIH14 / 762265 | 1.762 / 26.5 | 1.75357 | 1.78230 | 1.79992 | +0.0150 | High-index positive G2 partner |
| L8 | S-LAL 8 / 713539 | 1.713 / 53.9 | 1.70897 | 1.72221 | 1.72943 | -0.0084 | Rear negative meniscus glass class |

The production name includes “APO,” but that label is not treated as proof of any specific apochromatic performance criterion. What can be established from the selected patent and the modeled spectral data is narrower: ¶0020 explicitly calls for anomalous-dispersion optical material in L2 and L4 to reduce secondary spectrum, and the data model contains catalog-resolved C-, F-, and g-line indices plus `dPgF` for those elements. This is sufficient to describe a deliberate secondary-spectrum correction strategy without inferring unmeasured residual chromatic performance.

## Focus Mechanism

Focusing is internal. The negative G2 group, consisting of L5 and L6, translates toward the image while G1, the stop, and G3 remain fixed. The patent's printed Example-1 spacings are retained as published:

| Gap | Infinity | Published close endpoint | Change |
|---|---:|---:|---:|
| d8, L4 rear to L5 front | 25.354567 mm | 39.777644 mm | +14.423077 mm |
| d12 total, L6 rear to L7 front | 61.619592 mm | 47.196515 mm | -14.423077 mm |

The equal and opposite changes preserve the overall optical track while translating G2 by 14.423077 mm imageward. Because the modeled stop is fixed relative to G3, only the surface-12-to-stop portion of d12 varies; the stop-to-L7 spacing remains fixed.

A source contradiction must be retained rather than silently repaired. Patent ¶0024 describes the “near” condition as a subject-to-image distance of approximately seven focal lengths, and the Example-1 focus column is labeled `700`. The printed Example-1 d8/d12 values do not produce that conjugate when traced. In the final scaled rounded-index model they produce a subject-to-image distance of 2.951 m and $|m|=0.1173\times$. Those values are instead close to the production specifications of 3.00 m and 0.11×. The model therefore retains the focus state as published, preserves the printed spacings, and treats the `700` label as an unresolved source conflict rather than swapping the two values or inventing a replacement focus state.

The catalog minimum-focus value of 3.00 m consequently represents the manufacturer's marketed specification, while the exact modeled endpoint of the preserved patent spacings is the computed 2.951 m conjugate. These quantities are intentionally not conflated.

## Chromatic Correction Strategy

The chromatic strategy is concentrated in the positive front group. Patent ¶0020 specifies anomalous-dispersion material for L2 and L4, each with high Abbe number, so that secondary spectrum can be reduced without placing the environmentally sensitive material at the exposed first surface. L1 instead uses a more ordinary high-Abbe crown-class glass.

Within the data model, the S-FPL51 class references for L2 and L4 provide explicit $n_C$, $n_F$, $n_g$, and `dPgF` values. The surrounding negative L3 and the downstream glass sequence then provide the dispersion partners required to balance axial color while preserving the positive net power of G1. The patent's chromatic statement is therefore supported by both source text and catalog-resolved spectral coordinates, while any stronger claim about final longitudinal or secondary-spectrum residuals would require a dedicated chromatic performance trace.

## Aberration Correction Strategy

The design repeatedly uses surfaces that are comparatively concentric with the aperture stop. The patent describes this as a means of reducing rapid chief-ray direction changes and lowering the aberration generated at individual surfaces. It applies the idea particularly to r4/r5 in G1 and to most of the G2 surfaces other than r9 (¶0014, ¶0018).

The focus group is intentionally moderate in power. From the final model, $|f_2|/f=0.644944$, within the patent's 0.55-0.8 range. The patent explains the tradeoff directly: a stronger negative focus group reduces required travel but increases aberration variation, while a weaker group reduces aberration change per unit movement but demands excessive travel.

The rear group addresses residual field and distortion behavior rather than merely adding power. L8's r16 sign is explicitly constrained for pincushion control, and the patent also constrains the L7-L8 separation to balance distortion against chromatic correction. The final scaled model has a paraxial Petzval sum of +0.0003235735 mm⁻¹, corresponding to a Petzval radius of about +3090.49 mm under the project's sign convention. This is a paraxial surface-power sum, not a claim about the fitted best-focus field surface.

## Conditional Expressions

The selected example satisfies the patent conditions applicable to this architecture. Dimensionless quantities are unchanged by the uniform 300 mm scaling. One source defect requires explicit treatment: ¶0022 prints $0.09<d_{14}<0.16$, which is dimensionally inconsistent with the tabulated $d_{14}=13.430$. Each worked example instead prints a derived $d_{14}/f$ value (0.134, 0.12, and 0.125), so the normalized form $0.09<d_{14}/f<0.16$ is treated as the intended condition rather than silently attributing that normalization to the paragraph text.

| Source / interpreted condition | Final-model value | Result |
|---|---:|---|
| $0.05<d_{10}/d_8<0.7$ | 0.251600 | Pass |
| Preferred $0.1<d_{10}/d_8<0.35$ | 0.251600 | Pass |
| $r_{12}>0$ | +120.886 mm | Pass |
| $0.55<|f_2|/f<0.8$ | 0.644944 | Pass |
| $0.5<f_1/f<0.7$ | 0.603532 | Pass |
| $0.06<\phi_5 f_1<0.23$ | 0.109227 | Pass |
| Intended normalized form of ¶0022: $0.09<d_{14}/f<0.16$ | 0.134515 | Pass |
| $r_{16}<0$ | -335.977 mm | Pass |

The patent additionally specifies an anomalous-dispersion material condition for L2 and L4. The S-FPL51 class reference used by the model has catalog $\nu_d=81.54$ and audited $\theta_{g,d}=1.2318$, both within the patent's stated intervals. This catalog result supports the class assignment; it does not establish the actual production melt or supplier.

## Verification Summary

Independent reduced-angle sequential tracing and an independently assembled ABCD matrix agree to a maximum absolute difference of $1.78\times10^{-15}$ for the final modeled prescription arrays. With the patent's rounded refractive indices retained, the model gives EFL 298.290 mm and BFD 95.549 mm. Replacing only those rounded indices with the audited catalog-class coordinates gives EFL 300.037 mm and BFD 96.579 mm, closely recovering the scaled patent targets of 300.000 mm and 96.575 mm.

The inferred stop produces an entrance-pupil semi-diameter of 32.213 mm and an infinity f-number of 4.6300003 in the rounded-index model, consistent with the modeled f/4.63 aperture. The published focus movement preserves the total optical track at 278.951 mm in both defined focus states.

The inferred clear apertures pass the available geometry checks in both focus states. The smallest element rim edge thickness is 1.138 mm, the largest actual spherical rim-slope angle is $34.83^\circ$, and all sampled off-axis bundles remain inside the authored semi-diameters. There are no conic limits to test because the prescription contains no aspheres.


## Sources and References

- **Primary patent:** Mamiya-OP Co., Ltd., JP H10-206729 A, *Telephoto Lens* (望遠レンズ), Example 1 / Table 1, filed 24 January 1997, published 7 August 1998. The prescription, focus spacings, design conditions, and aberration-control rationale are taken from this publication.
- **Mamiya UK, _Retail Prices — September 2004_:** manufacturer-origin listing for “Mamiya AF Apo 300mm F/4.5 IF Lens,” product code 966005, within the Mamiya 645 AFD system. <https://mamiya.co.uk/library/645AFD.pdf>
- **Mamiya, _645AF Interchangeable Lenses_:** manufacturer-origin specification table used for the commercial 300 mm f/4.5, 8-element / 8-group, 14° field, 3.00 m minimum-focus, and 0.11× magnification specifications. <https://ianbfoto.com/downloads/Mamiya%20645AF/Mamiya%20645AF%20Interchangeable%20Lenses.pdf>
- **OHARA optical-glass detailed data:** catalog coordinates used for the class-level glass references and explicit line-index / anomalous-dispersion fields. <https://oharacorp.com/wp-content/uploads/2025/04/all-detailed-data-20250418.pdf>
- **J-GLOBAL patent record:** bibliographic cross-check for JP H10-206729. <https://jglobal.jst.go.jp/detail?JGLOBAL_ID=200903046417633770>
