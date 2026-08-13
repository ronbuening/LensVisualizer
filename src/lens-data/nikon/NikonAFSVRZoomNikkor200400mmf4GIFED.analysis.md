# NIKON AF-S VR ZOOM-NIKKOR 200-400mm f/4 G IF-ED — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2005/0157403 A1
**Application Number:** 11/081,513
**Filed:** March 17, 2005
**Published:** July 21, 2005
**Priority:** JP 2002-292827, October 4, 2002; JP 2003-324679, September 17, 2003
**Inventor:** Susumu Sato
**Assignee:** Nikon Corporation
**Title:** Zoom Lens System
**Embodiment analyzed:** Example 1

The modeled prescription is Example 1 of US 2005/0157403 A1. The patent describes a four-group afocal zoom in which G2 and G3 move for zooming, the internal G1m subgroup moves for focusing, and the negative G4m subgroup shifts transversely for vibration reduction (¶¶0070–0074). The data file preserves the patent design at its published scale: the three modeled zoom states are 204, 300, and 392 mm at FNO 4.08, with no uniform scaling.

The selected production correlation is the original Nikon AF-S VR Zoom-Nikkor 200-400mm f/4G IF-ED. Nikon's product specification gives a 200–400 mm f/4 Nikon F-bayonet lens for FX/35 mm with 24 elements in 17 groups, four ED-glass elements, internal focusing, VR, nine diaphragm blades, and a 2.0 m minimum focus distance. Nikon's product history places the original lens in 2003. These manufacturer values are marketing and mechanical specifications; they are not substituted for the patent's exact 204–392 mm, FNO 4.08 optical states.

The correlation rests on several independent points of agreement:

1. The production 200–400 mm f/4 range brackets the patent's 204–392 mm, FNO 4.08 design range closely without requiring scale transformation.
2. The production construction is 24 elements in 17 groups, exactly matching the 24 active glass elements and 17 air-separated/cemented groups in Example 1 after the patent's separate rear filter plate is excluded.
3. Nikon specifies four ED elements. Example 1 contains four elements at the unusually low-dispersion coordinate nd = 1.49782, νd = 82.56 (L12, L13, L14, and L47). This count supports the correlation, but the patent does not identify those elements by Nikon ED trade name or by a public glass catalog designation, so the data retains a generic 498826 low-dispersion class rather than asserting a vendor identity.
4. Nikon identifies the production lens as internally focusing. The patent focuses only by translating G1m, the L15–L17 subgroup (¶0072).
5. Nikon identifies the production lens as VR-equipped. The patent performs vibration reduction by transverse displacement of G4m, the L44–L46 subgroup (¶0071).
6. The production minimum focus distance is 2.0 m. Example 1 explicitly supplies its closest-focus aberration states at R = 2000 mm (¶0077).
7. The 2003 production timing is consistent with the patent family's 2002 and 2003 Japanese priority dates.

This is a convergent production-to-patent correlation rather than a manufacturer statement that Example 1 is the production prescription. The Nikon sources establish product identity and marketed specifications; the patent and independent computation establish the modeled optical design.

Two source-table issues are explicitly normalized in the model. First, Table 1 prints the infinity/392 mm spacing d7 as -54.90581 mm even though the same focus-only subgroup is fixed at +54.90581 mm in the other infinity zoom states. Using the printed negative sign destroys the stated optical state; using +54.90581 mm restores the 392 mm EFL and published back focus. Second, Table 1 omits d26 in all infinity rows. Because the patent states that G1m alone performs focusing, d26 is a zoom-only G3-to-stop spacing; the model therefore reuses the published closest-focus d26 values at infinity. This is a mechanism-constrained fill of a source omission, not an invented focus reconstruction.

The source rear-inserting filter is also normalized. Patent surfaces 44–45 form a 2.00 mm plane-parallel plate at nd = 1.51680. Filters are excluded from the active LensVisualizer prescription, so the final active surface 43 carries an air-equivalent image spacing of 95.48637540084388 mm. No other optical dimensions are scaled.

The patent publishes the aperture stop S1 and field stop S2 but no complete per-surface clear-aperture table. The model therefore uses an independently solved S1 semi-diameter of 19.12567431 mm and derived surface semi-diameters constrained by the published group effective diameters, ray envelopes, the optical section, and geometry validation. S2 is retained as an optically neutral clear-aperture plane with an inferred 17.90 mm semi-diameter. These aperture dimensions are modeling results, not patent-published per-surface clear apertures.

Example 1 is entirely spherical. There is no asphere equation, conic conversion, coefficient scaling, or aspheric departure to report.

## Optical Architecture

The patent explicitly calls the design a four-group afocal zoom (¶0043). In object-to-image order the principal power sequence is positive G1, negative G2, positive G3, and positive G4. G1 and G4 are themselves partitioned into three optically powered subgroups, allowing focus, zoom, and vibration-reduction motions to be mechanically independent.

| Subgroup | Computed focal length (mm) | Motion | Optical function in the modeled system |
|---|---:|---|---|
| G1f | +159.994224 | Fixed | Large front collector within G1 |
| G1m | -89.999686 | Axial focus | Internal focusing subgroup |
| G1r | +168.079064 | Fixed | Rear positive portion of G1 |
| G2 | -54.338339 | Axial zoom | Negative variator |
| G3 | +120.641952 | Axial zoom | Positive compensator |
| G4f | +99.972604 | Fixed | Front positive relay ahead of S2 |
| G4m | -55.003932 | Transverse VR | Negative image-stabilization subgroup |
| G4r | +82.057370 | Fixed | Positive rear relay to the image plane |

These values are equivalent focal lengths of the air-bounded subgroup matrices at their published internal spacings; they are not isolated-element powers and should not be read as a separate in-situ power decomposition of the complete zoom. At infinity the complete first-group matrix has a computed focal length of +298.789607 mm, while the fixed-internal-spacing fourth-group matrix is +159.035735 mm. The zoom action is concentrated in the strong negative G2 and positive G3 pair.

At infinity the G1m focus subgroup remains fixed while G2 and G3 move between the three published zoom states. Relative to the 204 mm state, the front vertex of G2 moves about 32.74642 mm imageward at 300 mm and 48.98475 mm imageward at 392 mm; G3 moves about 19.01451 mm and 22.13135 mm respectively. The combined variable zoom space d14 + d21 + d26 remains 60.36628 mm at 204 mm and 60.36627 mm at both 300 and 392 mm. The three published states therefore show monotonic motion without a reversal.

The aperture stop S1 lies immediately after G3. G4f then forms a positive relay before the separate field stop S2. Behind S2, G4m supplies the transverse stabilization motion and G4r completes the rear relay. This separation is central to the architecture described by the patent: zooming, focusing, and vibration-reduction motions are assigned to different subgroups (¶0092).

The patent repeatedly describes the system as a telephoto zoom. That wording is retained here as a source description, not broadened into a project-level classification across the entire zoom range. Under the project's geometric criterion, the normalized active track is longer than EFL at the wide and middle states and only marginally shorter than EFL at the 392 mm endpoint; restoring the omitted physical filter makes even that endpoint slightly longer than EFL. The design is not retrofocus: its rear focal distance remains far below EFL throughout the zoom.

## Element-by-Element Analysis

### G1f — Fixed Positive Front Subgroup

G1f contains the large-diameter front optics L11–L14. Its computed subgroup focal length is +159.994224 mm. The patent fixes G1f relative to the image plane while G1m moves behind it for focusing (¶0072).

#### L11 + L12 — Cemented Front Pair

**L11:** nd = 1.80384, νd = 33.89. Glass: E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified). Isolated f = -243.479577 mm.
**L12:** nd = 1.49782, νd = 82.56. Glass: 498826 low-dispersion crown class (vendor identity unproven). Isolated f = +216.992431 mm.

L11 is the object-side negative meniscus singled out in the patent's conditional-expression discussion. The patent specifically requires the most object-side element to be a negative meniscus with its convex surface toward the object and relates its refractive index and isolated focal length through condition (11) (¶¶0063–0066). The model's isolated thick-lens power gives the negative focal length quoted above.

L12 is the positive biconvex cemented partner. Its very high νd contrasts sharply with L11's much lower νd. The pair's cemented net focal length is +1984.477770 mm: despite L11 and L12 each having substantial isolated power of opposite sign, their cemented combination is only weakly positive. This distinction is important because the pair cannot be characterized correctly by either isolated element focal length alone.

The first group reaches the patent's maximum effective diameter d1 = 102.10 mm at the front. The modeled semi-diameter of 51.05 mm at L11/L12 therefore uses the published group diameter directly rather than deriving it from a generic mechanical-margin rule.

#### L13 — Positive Meniscus

**nd = 1.49782, νd = 82.56. Glass: 498826 low-dispersion crown class (vendor identity unproven). f = +349.317470 mm.**

L13 is a positive meniscus following the front cemented pair. It uses the same low-dispersion coordinate as L12. In the fixed G1f subgroup it adds positive power while preserving the same high-Abbe material coordinate through the front collector.

Because the patent provides only nd and νd for this glass, the data does not attach a vendor Sellmeier identity or explicit C/F/g-line indices. Its chromatic behavior is therefore represented only to the level supported by the authored glass class and Abbe data.

#### L14 — Positive Meniscus

**nd = 1.49782, νd = 82.56. Glass: 498826 low-dispersion crown class (vendor identity unproven). f = +335.580445 mm.**

L14 is the rear positive meniscus of G1f. It is the third consecutive element in the front subgroup using the 1.49782/82.56 coordinate. The air space following L14 is d7, one of the two gaps that change when G1m focuses.

The infinity/tele d7 sign printed in Table 1 is the source error described above. The modeled positive spacing preserves the fixed G1f geometry and the published focus mechanism while restoring the intended 392 mm optical state.

### G1m — Internal-Focus Subgroup

G1m consists of L15 followed by the cemented L16/L17 pair. Its computed focal length is -89.999686 mm. The subgroup moves as a unit along the optical axis for close focusing, while G1f and G1r remain fixed (¶0072).

#### L15 — Biconcave Negative

**nd = 1.78800, νd = 47.38. Glass: 788474/475 lanthanum-glass class. f = -120.621502 mm.**

L15 is the front negative element of the focus group and carries most of the obvious isolated negative power in G1m. The patent describes it as double concave (¶0073). Its movement with L16/L17 changes conjugate distance without moving the large front group.

The modeled element is substantially smaller in diameter than G1f, which is consistent with the internal-focus architecture: focusing does not require translation of the 102.10 mm effective-diameter front group.

#### L16 + L17 — Cemented Negative Pair

**L16:** nd = 1.84666, νd = 23.78. Glass: 847238 dense-flint class. Isolated f = +399.785181 mm.
**L17:** nd = 1.60300, νd = 65.47. Glass: 603655 phosphate-crown class. Isolated f = -197.423539 mm.

L16 is a positive meniscus cemented to the negative L17. The patent identifies the pair as a cemented negative lens (¶0073). Independent thick-system calculation gives the cemented unit a net focal length of -388.261407 mm, so its in-unit behavior is negative even though L16 is positive in isolation.

Together with L15, the pair forms the substantially stronger -89.999686 mm G1m subgroup. The focus function therefore belongs to the complete three-element moving subgroup, not to a single negative lens.

### G1r — Fixed Rear Subgroup of G1

#### L18 — Positive Meniscus

**nd = 1.80440, νd = 39.59. Glass: 804396 lanthanum-glass class. f = +168.079064 mm.**

L18 is the sole element of G1r and is fixed relative to the image plane. The patent describes it as a positive meniscus with its convex surface toward the image (¶0073). Its isolated focal length is consequently also the focal length of G1r.

The patent publishes d1r = 55.86 mm as the maximum effective diameter of G1r. The model uses the corresponding 27.93 mm semi-diameter directly at L18. Condition (10) is formulated around this subgroup's refractive index and focal length (¶¶0060–0062).

### G2 — Negative Zoom Variator

G2 has a computed focal length of -54.338339 mm and is the strongest negative functional group in the principal zoom train. It moves axially with zoom while the focus setting is unchanged.

#### L21 — Negative Meniscus

**nd = 1.69680, νd = 55.52. Glass: 697555 lanthanum-crown class. f = -130.817897 mm.**

L21 is the front negative meniscus of G2. The patent describes it as a negative lens with the stronger concave surface toward the image (¶0073). Its negative isolated power begins the variator's diverging action.

Its modeled front and rear semi-diameters taper more strongly than most elements in the prescription. That taper is a derived geometric choice constrained by the ray envelope and source drawing rather than a patent-published per-surface aperture.

#### L22 + L23 — Cemented Pair

**L22:** nd = 1.84666, νd = 23.78. Glass: 847238 dense-flint class. Isolated f = +86.627258 mm.
**L23:** nd = 1.64000, νd = 60.09. Glass: S-BSM81 catalog equivalent (patent 640601; production supplier unspecified). Isolated f = -81.586031 mm.

The pair combines a strong positive L22 with a strong negative L23. Their isolated powers nearly cancel in cemented form: the net cemented focal length is -1608.373752 mm. The cemented pair is therefore only weakly negative by itself.

That weak net unit sits between the negative L21 and L24 elements. The complete G2 group is much stronger at -54.338339 mm than the cemented pair alone, illustrating the difference between the cemented unit's equivalent power and the equivalent power of the complete air-bounded variator.

#### L24 — Negative Meniscus

**nd = 1.64000, νd = 60.09. Glass: S-BSM81 catalog equivalent (patent 640601; production supplier unspecified). f = -106.071070 mm.**

L24 is the rear negative meniscus of G2 and shares the same crown coordinate as L23. It terminates the negative variator immediately before the d21 gap to G3.

The zoom table changes both the front and rear air spaces around the G2/G3 moving system. L24 itself is not a focusing element; its axial motion is entirely part of the zoom mechanism.

### G3 — Positive Zoom Compensator

G3 has a computed focal length of +120.641952 mm. It moves with zoom and is followed by aperture stop S1. Its positive power counterbalances the negative variator while maintaining the image condition through the zoom range.

#### L31 — Biconvex Positive

**nd = 1.60300, νd = 65.47. Glass: 603655 phosphate-crown class. f = +290.746714 mm.**

L31 is the front positive element of G3. It is air-spaced from the cemented L32/L33 pair and contributes moderate positive power to the compensator.

Its 1.60300/65.47 coordinate also appears in several cemented partners elsewhere in the system. The data intentionally records that coordinate as a class rather than assigning the exact modern catalog match found in the glass audit, because the patent does not name the supplier.

#### L32 + L33 — Cemented Positive Pair

**L32:** nd = 1.60300, νd = 65.47. Glass: 603655 phosphate-crown class. Isolated f = +81.270386 mm.
**L33:** nd = 1.79504, νd = 28.55. Glass: J-LAFH3 catalog equivalent (patent 795286; production supplier unspecified). Isolated f = -137.442119 mm.

The patent identifies L32/L33 as a cemented positive lens (¶0073). The computed cemented focal length is +201.772592 mm. L32 supplies the stronger isolated positive power; L33 is a high-index, low-Abbe negative partner.

The complete G3 group is stronger than the cemented pair because L31 contributes additional positive power. The d26 spacing behind L33 is the zoom-only gap that is omitted from the infinity block of Table 1 and restored from the published closest-focus row under the patent's G1m-only focusing constraint.

### Aperture Stop S1

The aperture stop is explicitly published immediately after G3 (¶0073). In the LensVisualizer data it is the single surface labeled `STO`, satisfying the one-stop schema requirement.

The patent gives FNO 4.08 but does not publish the physical stop diameter. Solving the stop from the final prescription gives a semi-diameter of 19.12567431 mm. Repropagating that same physical stop through the three infinity zoom states gives modeled f-numbers of 4.080003, 4.079996, and 4.080000, showing that the constant FNO follows from pupil magnification as the zoom groups move rather than from a changing physical iris radius in the wide-open model.

### G4f — Fixed Positive Front Relay

G4f has a computed focal length of +99.972604 mm. It lies immediately behind S1 and remains fixed. The separate field stop S2 follows L43 across a 22 mm air space (¶0073).

#### L41 + L42 — Cemented Positive Pair

**L41:** nd = 1.80384, νd = 33.89. Glass: E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified). Isolated f = -325.627594 mm.
**L42:** nd = 1.60300, νd = 65.47. Glass: 603655 phosphate-crown class. Isolated f = +123.586975 mm.

The patent describes this cemented unit as a negative meniscus L41 joined to a biconvex L42, forming a cemented positive lens (¶0073). The independently computed cemented focal length is +201.354584 mm.

The pair therefore repeats a theme seen at the front of the lens: a negative isolated element is incorporated into a net-positive cemented unit. The differing Abbe values provide first-order chromatic balancing, but no stronger secondary-spectrum claim is made because the data lacks explicit line indices or validated vendor Sellmeier identities for all members.

#### L43 — Positive Meniscus

**nd = 1.60300, νd = 65.47. Glass: 603655 phosphate-crown class. f = +196.423716 mm.**

L43 completes the positive G4f relay. It is followed by the patent's wide air space and field stop S2. Its positive isolated power combines with the L41/L42 cemented unit to produce the +99.972604 mm subgroup power.

The patent publishes d4f = 38.49 mm as the maximum effective diameter of G4f. The model uses a 19.245 mm semi-diameter at the leading cemented pair as an exact half-diameter anchor.

### Field Stop S2

The patent explicitly places a field stop between G4f and G4m (¶¶0019, 0068, 0073). It is not an aperture stop and does not replace S1.

The sequential model retains S2 as an optically neutral plane with a clear semi-diameter of 17.90 mm. This value is inferred rather than published: a full-field paraxial trace at the patent's Y = 21.60 mm image height reaches a maximum modeled envelope of 17.825984 mm at S2. The small clearance preserves the intended field-stop role without introducing an opaque-disk blocker, which would have the opposite physical behavior.

### G4m — Negative Vibration-Reduction Subgroup

G4m consists of L44/L45 plus L46 and has a computed focal length of -55.003932 mm. The patent moves this entire subgroup perpendicular to the optical axis to shift the image for vibration reduction (¶¶0043, 0071).

#### L44 + L45 — Cemented Negative Pair

**L44:** nd = 1.84666, νd = 23.78. Glass: 847238 dense-flint class. Isolated f = +73.470703 mm.
**L45:** nd = 1.74100, νd = 52.67. Glass: 741527/528 lanthanum-crown class. Isolated f = -42.809820 mm.

The cemented pair is net negative despite L44's strong positive isolated power. Its computed cemented focal length is -105.199941 mm.

The subgroup's maximum effective diameter d4m is published as 27.83 mm. The model uses a 13.915 mm semi-diameter at the L44/L45 pair, directly preserving that source aperture constraint.

#### L46 — Biconcave Negative

**nd = 1.74100, νd = 52.67. Glass: 741527/528 lanthanum-crown class. f = -120.264566 mm.**

L46 is the rear negative element of G4m. It shares the same glass coordinate as L45 and reinforces the negative power of the moving stabilization subgroup.

An independent first-order decenter calculation using the final prescription gives -1.827986 mm of image displacement for a +1.000 mm transverse G4m displacement. Rounded to the patent's precision, this reproduces the Table 1 value of -1.828 mm at all three zoom states. In the affine paraxial model, the decenter contribution is an additive term generated within G4m and propagated by the fixed downstream relay, so the same first-order sensitivity is recovered at the published close-focus states despite the different centered upstream focus mapping.

### G4r — Fixed Positive Rear Relay

G4r has a computed focal length of +82.057370 mm and remains fixed relative to the image plane. It completes the relay from the stabilization group to the final image.

#### L47 — Biconvex Positive

**nd = 1.49782, νd = 82.56. Glass: 498826 low-dispersion crown class (vendor identity unproven). f = +139.311163 mm.**

L47 is the fourth and final element in Example 1 using the 1.49782/82.56 low-dispersion coordinate. It is the front positive element of G4r and is air-spaced from the final cemented pair.

The occurrence count of this coordinate matches Nikon's marketed count of four ED elements, which is useful correlation evidence. It does not establish that the patent coordinate is a particular commercial ED glass; accordingly, the data keeps the class designation and does not add anomalous-dispersion metadata.

#### L48 + L49 — Final Cemented Positive Pair

**L48:** nd = 1.64000, νd = 60.09. Glass: S-BSM81 catalog equivalent (patent 640601; production supplier unspecified). Isolated f = +51.658281 mm.
**L49:** nd = 1.84666, νd = 23.78. Glass: 847238 dense-flint class. Isolated f = -66.168729 mm.

The final cemented pair has a computed net focal length of +205.230140 mm. L48 is strongly positive in isolation and L49 negative; the cemented result is a moderate positive relay contribution.

The smallest modeled element edge thickness occurs in this final pair and remains positive under the derived semi-diameter set. After L49, the source's 3.00 mm air gap, 2.00 mm filter plate, and published Bf are represented by the normalized air-equivalent distance on surface 43 rather than by retaining the filter as an active element.

## Glass Identification and Selection

The patent supplies d-line refractive index and Abbe number for each glass but does not name commercial glasses. The final data retains the patent coordinates and uses compatible coefficient-backed catalog equivalents where available. Those equivalents provide dispersion curves without asserting the historical production supplier.

| Authored glass annotation | nd | νd | Elements | Interpretation |
|---|---:|---:|---|---|
| E-LAFH2 catalog equivalent (patent 804339) | 1.80384 | 33.89 | L11, L41 | Exact coefficient-backed coordinate; production supplier unspecified |
| 498826 low-dispersion crown class | 1.49782 | 82.56 | L12, L13, L14, L47 | Very high-Abbe coordinate; vendor identity deliberately unproven |
| 788474/475 lanthanum-glass class | 1.78800 | 47.38 | L15 | High-index focus-group glass class |
| 847238 dense-flint class | 1.84666 | 23.78 | L16, L22, L44, L49 | Very high-index, high-dispersion partner used repeatedly in cemented pairs |
| 603655 phosphate-crown class | 1.60300 | 65.47 | L17, L31, L32, L42, L43 | Moderate-index, high-Abbe crown coordinate |
| 804396 lanthanum-glass class | 1.80440 | 39.59 | L18 | High-index G1r coordinate |
| 697555 lanthanum-crown class | 1.69680 | 55.52 | L21 | Negative variator glass class |
| S-BSM81 catalog equivalent (patent 640601) | 1.64000 | 60.09 | L23, L24, L48 | Compatible coefficient-backed crown curve; production supplier unspecified |
| J-LAFH3 catalog equivalent (patent 795286) | 1.79504 | 28.55 | L33 | Compatible coefficient-backed high-index flint curve; production supplier unspecified |
| 741527/528 lanthanum-crown class | 1.74100 | 52.67 | L45, L46 | Shared material coordinate within G4m |

The four 1.49782/82.56 elements are conspicuous because Nikon's production specification separately states that the lens contains four ED elements. The numerical example therefore supports the production correlation at the level of count and low-dispersion character. It does not supply enough information to label those patent elements as a specific Nikon ED melt, fluorite, or a named OHARA/HOYA/HIKARI/SCHOTT/CDGM/SUMITA glass.

Similarly, the data contains no authored nC, nF, ng, or dPgF values. The patent identifies the C, d, F, and g wavelengths used in its aberration plots (¶0077), but it does not tabulate per-element line indices. Consequently, the model supports ordinary Abbe-based chromatic discussion but not an APO classification, anomalous-partial-dispersion claim, or quantitative secondary-spectrum analysis.

## Chromatic Correction Strategy

At the d-line/Abbe level, the design repeatedly combines high- and low-dispersion materials within cemented pairs and distributes the very high-νd 1.49782/82.56 coordinate through both the front collector and rear relay. This is consistent with the chromatic demands of a long focal-length zoom, but the analysis remains limited to what the patent data can support.

The front L11/L12 pair combines νd = 33.89 and 82.56; the G1m L16/L17 pair combines 23.78 and 65.47; G2's L22/L23 combines 23.78 and 60.09; G3's L32/L33 combines 65.47 and 28.55; G4f's L41/L42 combines 33.89 and 65.47; G4m's L44/L45 combines 23.78 and 52.67; and the final L48/L49 pair combines 60.09 and 23.78. These pairings show deliberate dispersion contrast even when their net first-order powers are weak.

The design also places three of the four 1.49782/82.56 elements in the large fixed front subgroup and the fourth in G4r. Nikon's marketed four-ED-element count is therefore structurally consistent with Example 1, but the model does not infer anomalous partial dispersion from νd alone.

## Focus Mechanism

The focus model is fully published rather than reconstructed. The patent fixes G1f and G1r relative to the image plane and focuses by moving only G1m (¶0072). Table 1 provides both infinity and closest-focus values for the two air gaps that bound the moving subgroup.

| Gap | Infinity (all zoom states) mm | Closest focus (all zoom states) mm | Change |
|---|---:|---:|---:|
| d7, ahead of G1m | 54.90581 | 72.39989 | +17.49408 mm |
| d12, behind G1m | 23.85167 | 6.35759 | -17.49408 mm |
| d7 + d12 | 78.75748 | 78.75748 | conserved |

Thus G1m translates 17.49408 mm imageward from infinity to the patent's 2 m state while the adjacent-space sum remains exactly constant. No other subgroup participates in focusing in the modeled prescription.

The patent reports closest-focus magnifications of -0.13941, -0.20502, and -0.26789 at the 204, 300, and 392 mm zoom states. Recomputing the finite-conjugate imaging condition from the final data gives -0.139423293, -0.205028603, and -0.267900111 respectively. The residual image-condition B terms are -0.01019, -0.00816, and -0.00570 mm, consistent with the source table's rounded prescription.

Table 1 lists D0 = 1607.6776 mm at closest focus, where D0 is the object-to-front-surface distance. The patent separately identifies the closest focusing distance as R = 2000 mm (¶0077). These are different reference planes rather than contradictory focus distances.

The production specification's 2.0 m minimum focus distance therefore agrees with the patent's selected close state, but the optical model preserves the patent's own conjugate geometry and does not replace it with a marketing-distance approximation.

## Image Stabilization

The patent assigns vibration reduction to G4m, the negative L44–L46 subgroup between field stop S2 and the fixed G4r relay. G4m shifts perpendicular to the optical axis while G4f and G4r remain centered (¶¶0043, 0071). This is a genuine transverse decenter mechanism, not an axial focus or zoom spacing.

The source table gives a +1.000 mm G4m displacement and a -1.828 mm image-plane displacement at each of the three zoom states, with the same image displacement at closest focus. Independent affine paraxial tracing of the final prescription gives -1.827986 mm per +1.000 mm subgroup shift, reproducing the published value to its stated precision.

The axial `var` table therefore does not attempt to encode VR. The lens diagram represents the centered optical state; the stabilization motion remains a documented mechanical/optical degree of freedom rather than an invented axial configuration.

The computed subgroup powers clarify why G4m is effective in this location. G4m is -55.003932 mm, bracketed by the fixed positive G4f (+99.972604 mm) and G4r (+82.057370 mm). Its decenter changes the chief-ray direction inside a positive relay, producing the measured image translation without moving the zoom or focus groups.

## Conditional Expressions

The patent defines eleven conditional expressions governing group-power relationships, effective diameters, and selected element powers (¶¶0044–0066). The final data reproduces the same independently computed values found from the patent prescription.

| Condition | Patent range | Computed from final data | Table 4 Example 1 | Result |
|---:|---|---:|---:|---|
| (1) | 2.5–5.0 | 3.839546 | 3.491 | Within inequality; Table 4 mismatch |
| (2) | 2.5–5.0 | 3.853346 | 3.853 | Match to rounding |
| (3) | 2.5–5.0 | 3.844305 | 3.844 | Match to rounding |
| (4) | 2.5–5.0 | 3.844407 | 3.844 | Match to rounding |
| (5) | 0.7–1.3 | 1.066326 | 1.066 | Match to rounding |
| (6) | 0.025–0.045 | 0.033389 | 0.031 | Within inequality; Table 4 mismatch |
| (7) | 0.025–0.045 | 0.033432 | 0.031 | Within inequality; Table 4 mismatch |
| (8) | 0.020–0.070 | 0.034948 | 0.033 | Within inequality; Table 4 mismatch |
| (9) | 0.025–0.045 | 0.034374 | 0.032 | Within inequality; Table 4 mismatch |
| (10) | 0.0025–0.0039 | 0.003297 | 0.0033 | Match to rounding |
| (11) | -0.0060 to -0.00050 | -0.002277 | -0.0023 | Match to rounding |

Conditions (2)–(5) and (10)–(11) reproduce Table 4 to the published precision. Conditions (1) and (6)–(9) do not. The discrepancy is retained as a source contradiction rather than reconciled by substituting undocumented diameters or powers. Importantly, every independently recomputed value still satisfies the inequality that the patent associates with the design.

Condition (1) is particularly resistant to a simple diameter reinterpretation because it uses the same published d1 = 102.10 mm that participates in conditions (2)–(4), which do reproduce Table 4. Conditions (6)–(9) similarly depend on the patent's published effective diameters d1, d1r, d4f, and d4m. The model therefore preserves the source dimensions and reports the contradiction rather than changing the prescription to force the tabulated summary values.

## Verification Summary

The final TypeScript prescription was independently re-read and traced rather than assuming that the extracted patent values had been transcribed correctly. Sequential reduced-angle tracing and ABCD matrix calculations agree on the infinity-state focal lengths.

| Published state | Computed EFL (mm) | Computed wide-open F/# | Paraxial BFL from active surface 43 (mm) |
|---:|---:|---:|---:|
| 204 mm | 204.004592 | 4.080003 | 95.484954 |
| 300 mm | 300.003187 | 4.079996 | 95.484700 |
| 392 mm | 392.001714 | 4.080000 | 95.484842 |

The authored surface-43 image gap is 95.48637540084388 mm because it preserves the omitted 2.00 mm filter's optical path as an air-equivalent spacing. The approximately 0.0014–0.0017 mm difference between that authored value and the paraxial best-focus BFL is commensurate with the rounding precision of the patent radii, thicknesses, and indices.

The Petzval sum, evaluated surface by surface as φ/(n·n′), is 0.000210824338 mm⁻¹. Plane stops and the omitted plane-parallel filter contribute no surface power. This result is invariant across zoom because the refracting surface powers themselves do not change with the axial group separations.

The physical stop semi-diameter of 19.12567431 mm is a computed model quantity. The patent does not publish that radius. Likewise, all per-surface semi-diameters other than the four group-diameter anchors are derived. The final model exactly preserves the patent maxima d1 = 102.10 mm, d1r = 55.86 mm, d4f = 38.49 mm, and d4m = 27.83 mm as 51.05, 27.93, 19.245, and 13.915 mm semi-diameter constraints.

The tightest modeled air-space geometry occurs between G2 surfaces 19 and 20. At their authored 17.85 mm semi-diameters, the facing spherical rims retain 0.212358 mm of physical clearance. The resulting sag-intrusion fraction is 0.946102, so the lens uses a documented `gapSagFrac` of 0.95 rather than the shared 0.90 visualization-clearance default. This override preserves positive physical separation and avoids clipping the f/4.08 pupil; it is not a layout adjustment.

Across the final semi-diameter set, the maximum spherical rim slope is 0.481772 in dz/dy magnitude and the minimum modeled element edge thickness is 0.304695 mm. The S2 full-field envelope is 17.825984 mm, below its inferred 17.90 mm clear semi-diameter. These checks support the modeled apertures without treating them as source-published mechanical diameters.

No aspheres are present, so there are no conic-domain or polynomial-departure checks. No sensor cover, rear filter, flare-cutter, or dummy plane remains in the active sequential model. The separate source rear filter is represented only through the documented air-equivalent image spacing.

## Sources and References

1. Susumu Sato, **“Zoom Lens System,”** US 2005/0157403 A1, published July 21, 2005. Example 1, especially ¶¶0070–0078 and Tables 1 and 4.
2. Nikon USA, **AF-S VR Zoom-NIKKOR 200-400mm f/4G IF-ED** product specification: https://www.nikonusa.com/p/af-s-vr-zoom-nikkor-200-400mm-f4g-if-ed/2146/overview
3. Nikon Imaging, **Our Product History: 2000's**, 2003 product listing: https://imaging.nikon.com/imaging/information/products_history/2000/
4. OHARA optical-glass catalog and downloads: https://www.ohara-inc.co.jp/en/product/
5. HIKARI optical-glass catalog: https://www.hikari-g.co.jp/optical_glass/catalog/
6. HOYA optical-glass data downloads: https://www.hoya-opticalworld.com/english/datadownload/index.html
7. SCHOTT optical-glass data sheets: https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
8. CDGM optical-glass database: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
9. SUMITA optical-glass catalog: https://www.sumita-opt.co.jp/en/download/
