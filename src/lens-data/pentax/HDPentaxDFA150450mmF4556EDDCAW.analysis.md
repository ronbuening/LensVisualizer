## Patent Reference and Design Identification

**Patent:** US 2016/0327774 A1\
**Application Number:** 15/109,527 (PCT/JP2014/082211)\
**Priority:** January 6, 2014\
**Filed:** December 5, 2014 (PCT)\
**Published:** November 10, 2016\
**Inventor:** Minoru Murayama\
**Applicant / Assignee:** Ricoh Imaging Company, Ltd.\
**Title:** Zoom Lens System\
**Embodiment analyzed:** Numerical Embodiment 1 (Example 1; Figs. 1–6, Tables 1–3)

The prescription is the selected production correlation for the **PENTAX HD PENTAX-D FA 150–450mm f/4.5–5.6 ED DC AW**. The patent itself does not identify a commercial product, and RICOH's product literature does not identify this patent. The correlation therefore remains an author/modeling inference fixed for this dataset rather than a manufacturer-confirmed attribution.

Several independent characteristics converge on that correlation:

1. Numerical Embodiment 1 contains 18 elements in 14 physical groups, matching the production construction published by RICOH.
2. The patent design spans 153.50–440.00 mm at F4.6–5.7, close to but deliberately distinct from the marketed 150–450 mm F4.5–5.6 range. No uniform scale factor has been imposed to force the design endpoints onto the marketed values.
3. The patent image height is 21.64 mm, corresponding to a 43.28 mm image-circle diameter and therefore to the 35 mm full-frame coverage RICOH specifies for the production lens.
4. Numerical Embodiment 1 uses a negative rear group G5 for focusing toward finite distances (¶0083), while RICOH specifies a 2.0 m minimum focusing distance and 0.22× maximum reproduction ratio for the production lens.
5. The patent priority date of January 2014 precedes RICOH's February 5, 2015 product announcement and April 17, 2015 market release, placing the optical work in the appropriate development interval.

The structured data therefore keeps product and prescription quantities separate. `focalLengthMarketing` is 150–450 mm, whereas `focalLengthDesign` is 153.5–440 mm; the zoom interpolation points are the patent's 153.5, 260, and 440 mm states. Likewise, the modeled wide-open sequence is F4.6, F5.1, and F5.7, while the production designation remains F4.5–5.6. The canonical production taxonomy is Pentax K mount (`pentax-k`) and 135 full-frame (`135-full-frame`). RICOH's launch specification identifies the physical mount as KAF3.

## Optical Architecture

Numerical Embodiment 1 is a five-power-group zoom with the sequence **positive / negative / negative / positive / negative** from object to image side (¶0131). The diaphragm lies immediately behind G3, between G3 and G4. The patent describes the family as a telephoto zoom system, but under the project's stricter geometric definition only the 440 mm state is telephoto: total-track/EFL is 1.8108 at the wide state, 1.2188 at the intermediate state, and 0.7810 at the tele state. None of the three states is retrofocus because BFD remains below EFL throughout.

The five functional-group powers recomputed from the final data file are:

| Group | Composition | Group EFL | Wide-to-tele movement relative to the image plane |
|---|---|---:|---|
| G1 | L11–L13 | +260.1565 mm | 65.691 mm objectward |
| G2 | L21+L22 | −173.0200 mm | 47.368 mm imageward |
| G3 | L31–L34 | −363.6041 mm | stationary within 0.002 mm source rounding |
| G4 | L41–L45 | +60.5202 mm | 17.808 mm objectward |
| G5 | L51–L54 | −52.4826 mm | 45.430 mm objectward during zoom; imageward during closer focus |

The diaphragm is stationary with G3 relative to the image plane within source rounding. These motions reproduce the patent's kinematic description: during wide-to-tele zooming the G1–G2 separation increases, the G2–G3, G3–G4, and G4–G5 separations decrease, G1 moves objectward the most, G5 the second most, G4 the least, and G2 moves imageward (¶0079–¶0082). No reversing zoom group is present in the three published control states.

As a modeling interpretation, G1 is the front positive collector and long-focus power reservoir; G2 supplies the principal negative variator action; G3 is a weak negative stationary correction group tied mechanically to the stop; G4 is the strongest positive relay/converging group; and G5 is both the negative rear group and the focusing group. The group powers are not the same as the isolated powers of their constituent elements, especially where cemented interfaces and internal separations change the combined first-order behavior.

The prescription is all-spherical. The patent states that none of Numerical Embodiments 1–7 uses an aspherical lens element, and the final data accordingly contains `asph: {}`. There is no folded path, diffractive surface, image-stabilization optical group, sensor cover plate, filter plate, or inactive dummy/flare-cutter plane in the selected prescription.

## Element-by-Element Analysis

The element focal lengths below are isolated air-to-air thick-element EFLs computed from each element's own radii, thickness, and d-line index. They describe standalone element power only. Cemented-net powers retain the actual glass-to-glass interface, and functional-group powers describe the complete in-situ group; those quantities are therefore distinguished explicitly.

### G1 — Front positive group

#### L11 — Negative meniscus

**nd = 1.74950, νd = 35.3. Glass: 750353 (vendor unresolved). f = −318.9279 mm.**

L11 is the negative meniscus at the front of the positive first group, with its convex surface toward the object (¶0132). Its isolated power is weakly negative compared with the two following positive elements. The patent's first-group material condition specifically constrains this negative element to 33 < νd < 45; the stored νd = 35.3 satisfies that interval. The patent associates this material balance with control of lateral chromatic aberration at the short end and axial chromatic aberration at the long end (¶0110–¶0112).

The patent gives only the d-line coordinate. A fresh multi-vendor catalog audit found more than one source-precision-compatible material for this coordinate, so the data retains the six-digit coordinate and does not attach vendor-specific line indices or an anomalous-dispersion assignment.

#### L12 — Positive meniscus

**nd = 1.49700, νd = 81.6. Glass: 497816 (vendor unresolved). f = +316.4014 mm.**

L12 is a positive meniscus with its convex surface toward the object (¶0132). Together with L13 it supplies the positive power that turns the three-element front group into G1 = +260.1565 mm while placing two high-Abbe positive glasses behind the lower-Abbe negative L11.

The 497816 coordinate is compatible with multiple catalog families at the precision published by the patent. Vendor-specific C/F/g indices and `dPgF` are therefore omitted rather than selecting one catalog family as the physical melt.

#### L13 — Biconvex positive

**nd = 1.53775, νd = 74.7. Glass: 538747 (vendor unresolved). f = +259.9572 mm.**

L13 is the biconvex positive rear element of G1 (¶0132). Its isolated focal length is close to the complete G1 focal length, but the group power is the result of all three elements and their separations rather than L13 alone.

The average Abbe number of the two positive elements L12 and L13 is 78.15, satisfying the patent's condition (6), which the patent ties to suppression of secondary-spectrum axial color at the long focal-length end (¶0113–¶0114). No vendor-specific line data are assigned to L13 in the final data.

### G2 — Negative cemented variator group

#### L21 + L22 — Cemented doublet D21-22

**L21: nd = 1.71736, νd = 29.5. Glass: 717295 (vendor unresolved). f = +113.0373 mm.**\
**L22: nd = 1.78590, νd = 44.2. Glass: 786442 (vendor unresolved). f = −66.4889 mm.**

The patent makes G2 a cemented biconvex-positive / biconcave-negative pair (¶0133). The individual air-to-air powers are opposite in sign, but with the real cemented interface retained the doublet is net negative at **−173.0200 mm**, which is also the focal length of the complete G2 because the doublet constitutes the entire group.

The material ordering is intentional in the patent. L21 has lower νd and lower nd than L22: 29.5 < 44.2 and 1.71736 < 1.78590. Conditions (10)–(12) use those relationships and the negative element's partial dispersion to constrain chromatic correction in this compact two-element negative group (¶0123–¶0125).

The patent does not publish C/F/g indices for either member. Its own numerical condition table gives θgF22 = 0.563 and the condition-(12) boundary as 0.566 for Example 1, so the source itself establishes that the partial-dispersion condition is met without requiring a vendor-specific catalog assignment.

### G3 — Stationary weak negative group

#### L31 — Biconvex positive

**nd = 1.51633, νd = 64.1. Glass: 516641 (vendor unresolved). f = +149.6148 mm.**

L31 is the front positive member of G3. The patent uses the power ratio between L31 and the positive rear member or cemented rear unit in condition (3), relating that balance to spherical-aberration and coma correction (¶0102–¶0105). The final data retains the patent d-line coordinate without vendor-specific spectral fields.

#### L32 — Biconcave negative

**nd = 1.80610, νd = 40.9. Glass: 806409 (vendor unresolved). f = −80.6611 mm.**

L32 is the strong negative element between L31 and the rear cemented pair. Its isolated negative power is substantially stronger than L31's positive power. The patent's condition (4) constrains the ratio of the rear positive unit to L32 and connects that balance to spherical-aberration correction (¶0106–¶0108).

The six-digit coordinate is retained because the fresh catalog audit found multiple source-precision-compatible candidates. No vendor- or variant-specific line data are attached.

#### L33 + L34 — Cemented doublet D33-34

**L33: nd = 1.63980, νd = 34.5. Glass: S-TIM27 (OHARA catalog equivalent for patent 640345; production supplier unspecified). f = +52.6350 mm.**\
**L34: nd = 1.75700, νd = 47.8. Glass: 757478 (vendor unresolved). f = −57.9983 mm.**

The patent specifies L33 as biconvex positive and L34 as biconcave negative, cemented together, and explicitly states that the cemented lens has positive refractive power (¶0134). Independent calculation gives the cemented pair a net EFL of **+354.1341 mm**. This is much weaker than either isolated element because the opposed powers largely cancel.

G3 as a whole is nevertheless negative at −363.6041 mm because L31, L32, the cemented pair, and their axial separations combine differently from the cemented pair in isolation. This distinction is important: the positive D33-34 doublet should not be described as a positive G3.

G3 and the diaphragm are stationary relative to the image plane during zooming, which reduces the number of independently moving zoom units in the patent's mechanism (¶0082, ¶0093). L33 uses S-TIM27's verified dispersion model because its catalog coordinate matches the patent to source precision; this identifies an optical equivalent, not the production supplier. L34 remains vendor-neutral.

### G4 — Strong positive group

#### L41 — Negative meniscus

**nd = 1.71736, νd = 29.5. Glass: 717295 (vendor unresolved). f = −175.7332 mm.**

L41 is the negative meniscus leading the strong positive G4, with its convex surface toward the object (¶0135). The 717295 coordinate is retained without a vendor-specific spectral assignment.

The element is not itself the source of G4's positive group power. It precedes three positive-power contributions and participates in the group's internal balancing of ray angles.

#### L42 — Biconvex positive

**nd = 1.61800, νd = 63.4. Glass: 618634 (vendor unresolved). f = +81.4105 mm.**

L42 is a relatively strong positive singlet inside G4. Its isolated +81.4105 mm power is one of the principal positive contributions to the complete G4 = +60.5202 mm group. The final data retains only its patent d-line coordinate.

#### L43 + L44 — Cemented doublet D43-44

**L43: nd = 1.58913, νd = 61.2. Glass: 589612 (vendor unresolved). f = +60.4860 mm.**\
**L44: nd = 1.74950, νd = 35.3. Glass: 750353 (vendor unresolved). f = −58.2959 mm.**

The patent describes L43 as biconvex positive and L44 as a negative meniscus with its convex surface toward the image, cemented together (¶0135). The individual isolated powers are almost equal and opposite. With the cemented interface retained, the pair has an EFL of **−1775.1805 mm**, making it a very weak net-negative cemented unit rather than a major power source.

This pair is therefore best interpreted as an internal correction component inside the much stronger positive G4, not as the element pair that establishes G4's sign. Both members retain vendor-neutral coordinate labels; neither receives vendor-specific line data.

#### L45 — Biconvex positive

**nd = 1.65844, νd = 50.9. Glass: 658509 (vendor unresolved). f = +92.8805 mm.**

L45 completes G4 with another positive singlet (¶0135). Together with L42 and the weakly negative D43-44 unit, it leaves the complete group strongly positive at +60.5202 mm. Its 658509 coordinate is retained without vendor-specific spectral fields.

### G5 — Negative rear-focus group

#### L51 — Negative meniscus

**nd = 1.83481, νd = 42.7. Glass: 835427 (vendor unresolved). f = −91.1740 mm.**

L51 is the front negative meniscus of G5, with its convex surface toward the object (¶0136). It contributes substantial negative power to the rear focusing group. The 835427 coordinate remains vendor/variant unresolved, so no catalog-specific line indices are authored.

#### L52 + L53 — Cemented doublet D52-53

**L52: nd = 1.71736, νd = 29.5. Glass: 717295 (vendor unresolved). f = +60.9111 mm.**\
**L53: nd = 1.49700, νd = 81.6. Glass: 497816 (vendor unresolved). f = −146.8564 mm.**

The patent makes L52 biconvex positive and L53 a negative meniscus with its convex surface toward the image, cemented together (¶0136). The cemented pair is net positive at **+104.7525 mm** even though L53 is negative in isolation. This positive doublet is enclosed by the negative L51 and L54 elements, producing the complete G5 focal length of −52.4826 mm.

L53 is the material singled out by patent conditions (8) and (9): νd must exceed 72, and its partial-dispersion ratio must lie above a specified νd-dependent boundary. The patent's Example-1 condition table gives θgF5n = 0.538 and a boundary of 0.516, confirming the condition directly. The patent connects this choice to g-line lateral-chromatic correction at the long focal-length end (¶0119–¶0122).

#### L54 — Biconcave negative

**nd = 1.80400, νd = 46.6. Glass: 804466 (vendor unresolved). f = −58.8375 mm.**

L54 is the rearmost biconcave negative element (¶0136). It reinforces the negative sign of G5 after the positive D52-53 cemented unit. Its 804466 coordinate is retained without a vendor-specific spectral assignment.

The patent's condition (7) constrains the axial separation from the rear of the L52+L53 cemented unit to L54 relative to the G5 focal length. The authored prescription gives 14.518 mm for that separation and a ratio of 0.276625, within the patent range. The patent associates this spacing with peripheral-ray collection and with limiting aberration variation during focusing (¶0116–¶0118).

## Glass Identification / Selection

The patent publishes d-line `nd` and `νd` coordinates but no glass maker or trade name. The Stage-4 audit therefore treats the six-digit coordinate as the source-faithful identity. A fresh search across current or authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM, and Sumita material data found multiple source-precision-compatible catalog candidates for several coordinates; for example, 497816 is represented by OHARA S-FPL51, HOYA FCD1, SCHOTT N-PK52A, and CDGM H-FK61 families, while 717295 also has multiple catalog equivalents. Those cross-vendor coincidences prevent a physical melt from being established from Table 1 alone. The unambiguous 640345 coordinate is covered by OHARA S-TIM27 and is labeled explicitly as a catalog equivalent with the production supplier left unspecified.

| Coordinate | nd | νd | Elements | Stage-4 status |
|---|---:|---:|---|---|
| 750353 | 1.74950 | 35.3 | L11, L44 | vendor/variant unresolved |
| 497816 | 1.49700 | 81.6 | L12, L53 | vendor unresolved |
| 538747 | 1.53775 | 74.7 | L13 | vendor unresolved |
| 717295 | 1.71736 | 29.5 | L21, L41, L52 | vendor unresolved |
| 786442 | 1.78590 | 44.2 | L22 | vendor unresolved |
| 516641 | 1.51633 | 64.1 | L31 | vendor unresolved |
| 806409 | 1.80610 | 40.9 | L32 | vendor/variant unresolved |
| 640345 | 1.63980 | 34.5 | L33 | S-TIM27 catalog equivalent; supplier unspecified |
| 757478 | 1.75700 | 47.8 | L34 | vendor unresolved |
| 618634 | 1.61800 | 63.4 | L42 | vendor unresolved |
| 589612 | 1.58913 | 61.2 | L43 | vendor unresolved |
| 658509 | 1.65844 | 50.9 | L45 | vendor unresolved |
| 835427 | 1.83481 | 42.7 | L51 | vendor/variant unresolved |
| 804466 | 1.80400 | 46.6 | L54 | vendor unresolved |

Because the patent does not establish a catalog family, the final data removes the previous vendor-specific `nC`, `nF`, `ng`, and `dPgF` fields. This is significant for 497816 in particular: catalog families sharing essentially the same d-line coordinate can have different anomalous-partial-dispersion values, so selecting one family would inject spectral behavior not established by the patent. Patent conditions (9) and (12) remain verifiable from the publication's own Example-1 condition table, which supplies the relevant partial-dispersion ratios.

RICOH's February 2015 launch release states that the production lens uses three ED glass elements and one super-low-dispersion glass element. That is a product-level statement. The patent does not identify which prescription slots correspond to those marketed categories, so the analysis does not map the production ED/anomalous-dispersion count onto individual elements.

No apochromatic classification is made. The patent discusses secondary-spectrum and g-line correction through explicit conditions, but the final vendor-neutral data does not contain enough independently sourced line-index information to assign an APO or anomalous-dispersion label to a specific element.

## Focus Mechanism

The patent uses rear focusing. G5, the negative rearmost group, moves toward the image side when focus changes from infinity toward a finite object distance (¶0083, ¶0092, ¶0115). The production product literature specifies a lens-installed DC autofocus motor and a 2.0 m minimum focusing distance; those drive/mechanical facts come from RICOH, not from the patent prescription.

The patent publishes only infinity-focus zoom spacings for Numerical Embodiment 1. The close-focus rows in the data are therefore explicitly **`CONSTRAINED_RECONSTRUCTION`**, not published source states. The reconstruction holds G1–G4, the diaphragm, and the image plane fixed at each zoom position and allows only G5 to translate imageward. This yields one degree of freedom, with the adjacent gaps constrained so that D26 increases by exactly the amount BF decreases.

At the official 2.0 m minimum focusing distance, normalized to the fixed image plane, the solved states are:

| Zoom state | G5 imageward travel | D26 at infinity | D26 at 2 m | BF at infinity | BF at 2 m | Reconstructed magnification |
|---|---:|---:|---:|---:|---:|---:|
| 153.5 mm | 4.120506 mm | 29.522 mm | 33.642506 mm | 50.740 mm | 46.619494 mm | 0.081274× |
| 260 mm | 8.206505 mm | 18.749 mm | 26.955505 mm | 66.320 mm | 58.113495 mm | 0.130170× |
| 440 mm | 14.266495 mm | 1.900 mm | 16.166495 mm | 96.170 mm | 81.903505 mm | 0.216859× |

D26 + BF remains 80.262, 85.069, and 98.070 mm respectively, so the rear focus group translates without moving the image plane. The telephoto reconstruction gives |m| = 0.216859×, close to RICOH's rounded 0.22× production specification. The 0.22× value was not used as a fitting constraint; it is an independent external consistency check, not evidence that the reconstructed close-focus spacings were published by the patent.

## Chromatic Correction Strategy

The patent distributes chromatic correction across the front positive group, the compact negative G2 doublet, and the rear focusing group rather than relying on a single low-dispersion element.

In G1, the lower-Abbe negative L11 (νd = 35.3) is followed by two high-Abbe positives, L12 and L13, whose average νd is 78.15. Conditions (5) and (6) formalize that arrangement. The patent explains that the negative element's dispersion is selected to balance short-end lateral color and long-end axial color, while the high-Abbe positive pair is intended to reduce secondary-spectrum axial color at the long end (¶0110–¶0114).

G2 uses an unusual material ordering for a negative cemented doublet: the positive L21 has both lower νd and lower nd than the negative L22. Conditions (10) and (11) require precisely those inequalities. Condition (12) adds a partial-dispersion limit for L22, and the patent states that the combination is directed particularly at g-line axial chromatic correction while retaining a two-element G2 (¶0123–¶0125). The Example-1 condition table publishes θgF22 = 0.563 against a 0.566 boundary; the final data does not recreate that value from a selected vendor catalog.

G5 places the very high-Abbe 497816 coordinate at negative L53 inside the positive L52+L53 cemented unit. Conditions (8) and (9) constrain this negative partner's νd and θgF, and the patent expressly associates the choice with long-end g-line lateral chromatic correction (¶0119–¶0122). Because G5 is also the focusing group, the patent additionally uses condition (7) to control its internal spacing so that focus travel does not drive excessive spherical, coma, or astigmatic variation (¶0116–¶0118).

These statements describe the patent's correction strategy. They do not identify a marketed ED or anomalous-dispersion slot beyond what the patent and manufacturer sources establish.

## Conditional Expressions

The patent defines a set of principal conditions and several preferred narrower ranges. Conditions (1)–(8), (10), (11), and (13) below were independently recomputed from the selected Numerical Embodiment 1 prescription. Conditions (9) and (12) require partial-dispersion data not present in Table 1; for those two tests the published Example-1 values in Table 25 are reported and the inequalities are independently checked, rather than reconstructing a vendor-specific spectrum.

| Condition | Expression / comparison | Computed value | Result |
|---|---|---:|---|
| (1) | −6.5 < f1/f5 < −4.6 | −4.95700 | pass |
| (1′) | −6.0 < f1/f5 < −4.6 | −4.95700 | pass |
| (2) | −1.2 < fw/f3 < 0.7 | −0.42215 | pass |
| (2′) | −1.0 < fw/f3 < 0.5 | −0.42215 | pass |
| (3) | 0.75 < f33/f31 < 2.4 | 2.36697 | pass |
| (3′) | 1.0 < f33/f31 < 2.4 | 2.36697 | pass |
| (4) | −4.5 < f33/f32 < −1.9 | −4.39040 | pass |
| (4′) | −4.2 < f33/f32 < −2.0 | −4.39040 | **outside preferred range** |
| (5) | 33 < νd1n < 45 | 35.3 | pass |
| (6) | 77 < average νd1p | 78.15 | pass |
| (7) | 0.15 < d53/\|f5\| < 0.45 | 0.276625 | pass |
| (8) | 72 < νd5n | 81.6 | pass |
| (9) | θgF5n > −0.0017νd5n + 0.655 | 0.538 > 0.516 (Table 25) | pass |
| (10) | νd21 < νd22 | 29.5 < 44.2 | pass |
| (11) | nd21 < nd22 | 1.71736 < 1.78590 | pass |
| (12) | θgF22 < −0.0016νd22 + 0.637 | 0.563 < 0.566 (Table 25) | pass |
| (13) | −2.3 < f1/f2 < −1.1 | −1.50362 | pass |

All principal conditions (1)–(13) applicable to Numerical Embodiment 1 pass. Condition (4′) is a preferred subrange rather than the principal condition and is not satisfied by this example; the example nevertheless satisfies condition (4). This distinction is consistent with the patent's own numerical condition table.

There is a source-table numbering error in the publication. Paragraphs ¶0169 and ¶0170 refer to the condition summary as **Table 22**, while the printed heading over the numerical condition table is **TABLE 25**. The data values themselves do not require correction, and no patent numerical value has been silently changed to resolve the numbering inconsistency.

## Verification Summary

The final data file reproduces the patent's three infinity-focus states to the precision implied by the source tables. The Stage-4 verifier re-entered Tables 1–3 independently, parsed the final TypeScript arrays, and cross-checked sequential reduced-angle tracing against an ABCD calculation; the two first-order methods agree at machine precision.

| State | Patent f | Computed EFL | Patent fB | Computed BFD | Patent FNO. | Modeled f/# |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 153.50 mm | 153.497084 mm | 50.74 mm | 50.736749 mm | 4.6 | 4.599830 |
| Intermediate | 260.00 mm | 259.996439 mm | 66.32 mm | 66.323978 mm | 5.1 | 5.094854 |
| Tele | 440.00 mm | 439.995689 mm | 96.17 mm | 96.165225 mm | 5.7 | 5.698301 |

The corresponding total tracks are 277.955, 316.889, and 343.646 mm versus patent values of 277.95, 316.89, and 343.64 mm. A fixed 15.000 mm physical stop radius at patent surface 17 gives entrance-pupil diameters of 33.3702, 51.0312, and 77.2152 mm across the three states. The 15.000 mm stop radius is a modeling inference derived from the published FNO values; the patent publishes the stop plane but not its clear radius.

The surface-by-surface Petzval calculation, using φ/(n·n′) at every refracting surface, sums to +2.6536874×10⁻⁴ mm⁻¹. Because zooming changes air separations rather than surface powers, this sum is invariant across the three zoom states.

The patent does not publish surface semi-diameters. Every `sd` value in the data is therefore an inferred model quantity derived from marginal/chief-ray envelopes, the three infinity states, the reconstructed 2 m focus endpoints, the patent optical sections, and the production mechanical envelope. The authored geometry retains positive edge thickness in every element, stays within the current rim-slope and shared-band cross-gap criteria, and produced no first clipping at a cemented junction in the sampled off-axis endpoint traces. These clear apertures are not represented as patent source data.

No dimensional scaling was applied. The patent prescription remains at its published 153.50–440.00 mm design scale, so there was no scaling transform of radii, spacings, image coordinates, or aspheric coefficients. Because the example is entirely spherical, no conic conversion or aspheric coefficient transformation is applicable.

No sensor cover glass, optical filter, inactive dummy plane, flare-cutter plane, or mechanical component was removed from Numerical Embodiment 1: none is present in the selected prescription. The only non-refracting active plane retained in the sequential model is the diaphragm at patent surface 17.

## Sources / References

- **Primary patent:** US 2016/0327774 A1, *Zoom Lens System*, Minoru Murayama / Ricoh Imaging Company, Ltd., Numerical Embodiment 1, Figs. 1–6 and Tables 1–3. User-supplied patent PDF is the prescription authority.
- **RICOH IMAGING product specification:** HD PENTAX-D FA 150-450mmF4.5-5.6ED DC AW — https://www.ricoh-imaging.co.jp/english/products/lens/k/telephoto/hdpentax-dfa-150-450/
- **RICOH IMAGING launch release, February 5, 2015:** https://news.ricoh-imaging.co.jp/rim_info2/2015/20150205_019076.html
- **RICOH IMAGING release-date notice, March 27, 2015:** https://news.ricoh-imaging.co.jp/rim_info/2015/20150327_019120.html
- **RICOH IMAGING product feature page (Japanese), special optical glass discussion:** https://www.ricoh-imaging.co.jp/japan/products/lens/pentax-story/150-450/feature/
- **OHARA optical-glass catalog downloads and cross-reference data:** https://www.ohara-inc.co.jp/en/product/catalog/
- **HOYA optical-glass data downloads:** https://www.hoya-opticalworld.com/english/datadownload/index.html
- **SCHOTT optical-glass downloads:** https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
- **HIKARI optical-glass catalog:** https://www.hikari-g.co.jp/optical_glass/catalog/
- **CDGM optical-glass database:** https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
- **SUMITA optical-glass downloads:** https://www.sumita-opt.co.jp/en/download/

The catalog sources above are used to test whether the patent's d-line coordinates uniquely identify a physical glass. They are not used to assign a vendor where the patent does not do so.
