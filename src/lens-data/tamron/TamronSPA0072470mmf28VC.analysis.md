## Patent Reference and Design Identification

**Patent:** US 8,810,918 B2<br>
**Application Number:** US 13/589,884<br>
**Priority:** August 22, 2011<br>
**Filed:** August 20, 2012<br>
**Granted:** August 19, 2014<br>
**Inventor:** Dayong Li<br>
**Assignee:** Tamron Co., Ltd.<br>
**Title:** Large-Aperture Zoom Lens<br>
**Embodiment analyzed:** Example 4

The modeled prescription is Example 4 of US 8,810,918 B2, corresponding to Figs. 22–28 and the numerical tables on the patent's printed pp. 11–13. The LensVisualizer entry identifies this embodiment with the **TAMRON SP 24-70mm f/2.8 Di VC USD** (Model A007). That production correlation is a modeling inference; the patent itself does not name Model A007.

The correlation is supported by several independent features:

1. **Focal length and aperture.** Example 4 is 24.7000 / 42.5000 / 67.7990 mm at F/2.9, closely bracketing the marketed 24–70 mm f/2.8 specification while remaining numerically distinct from it.
2. **Architecture and stabilization.** The patent uses positive-negative-positive-positive groups, with negative subgroup G32 inside LG3 shifted orthogonally to the optical axis for image-blur compensation. This corresponds to the optical role of the production lens's VC group in the Canon EF and Nikon F versions.
3. **Physical count.** Tamron specifies 17 elements in 12 groups. Example 4 becomes the same 17-element count when the 0.3000 mm, nd = 1.51460 medium at surfaces 6–7 and its nd = 1.83400 substrate are treated as one physical hybrid-aspherical element while retaining both media in the sequential optical model.
4. **Specialty-element map.** Tamron's April 2012 A007 construction diagram marks two XR elements in the front group, one hybrid aspherical element at the front of the negative variator, three LD elements distributed through the train, and three glass-molded aspherical elements. Their positions coincide with the corresponding high-index front media, the S6 hybrid layer/substrate, the three 1.49700 / 81.61 media, and the aspherical L8/L11/L16 elements of Example 4.
5. **Timing and format.** The patent claims 2011 priority and concerns a large-aperture zoom for 35 mm film-format SLR cameras; the A007 was introduced in 2012 for full-frame SLR systems.

Marketing and design quantities are kept separate. Marketing metadata is 24–70 mm and f/2.8, whereas the patent control points are 24.7 / 42.5 / 67.799 mm at F/2.9. No uniform scale is applied: the prescription remains at native patent scale, with scale factor s = 1.

## Optical Architecture

Example 4 is a four-group large-aperture zoom with power sequence **positive LG1 – negative LG2 – positive LG3 – positive LG4**. The physical design is recorded as 17 elements in 12 air-separated groups. The authored `elements` array contains 18 optical-media entries because the hybrid asphere at physical Element 4 is represented as a thin bonded layer plus its glass substrate.

Independent first-order computation from the final data file gives the following group focal lengths. These are subsystem powers evaluated in air and should not be confused with the standalone powers stored on individual elements.

| Group | Computed focal length |
|---|---:|
| LG1 | +114.154 mm |
| LG2 | -18.787 mm |
| G31 | +32.069 mm |
| G32 | -50.245 mm |
| LG3, wide | +59.426 mm |
| LG3, intermediate | +60.204 mm |
| LG3, tele | +60.864 mm |
| LG4 | +45.649 mm |

LG1 is the positive front collector. Its relatively weak cemented front pair is followed by a stronger positive singlet, producing a positive group with a large front clear aperture. LG2 is the strong negative variator. It begins with the hybrid negative element, continues through a cemented pair of opposing powers, and ends with a high-Abbe negative member. The aperture stop is the patent's surface 14, in air between LG2 and LG3.

LG3 is split into G31 and G32. G31 is positive and consists of the two-sided aspherical L8 followed by cemented pair D3. G32 is the cemented negative subgroup D4 and is the part moved laterally for image stabilization. Because the published D(19) spacing between G31 and G32 changes with zoom, the composite focal length of LG3 changes slightly across the three modeled states even though the standalone powers of G31 and G32 do not.

LG4 is a positive rear relay composed of alternating positive and negative powers. It starts with a strong positive singlet, includes a weak-net cemented pair, then uses a two-sided aspherical negative element and a final weak positive meniscus. The resulting rear group remains positive at +45.649 mm.

The patent publishes five zoom-dependent axial gaps. They are modeled exactly as infinity-focus zoom spacings:

| Gap | Wide | Intermediate | Tele |
|---|---:|---:|---:|
| D(5) | 3.2354 mm | 18.8990 mm | 34.5562 mm |
| D(13) | 17.0881 mm | 6.6767 mm | 1.0000 mm |
| D(19) | 2.0000 mm | 1.6500 mm | 1.3596 mm |
| D(22) | 8.1524 mm | 3.0901 mm | 1.2000 mm |
| D(31) / image spacing | 40.3258 mm | 53.2243 mm | 63.2093 mm |

With the image plane held fixed, the computed absolute motion of LG2 reverses between the intermediate and telephoto states even though each tabulated gap itself is monotonic. The other principal group stations move objectward over the wide-to-tele sequence. This reversal is an in-situ kinematic result, not an additional patent spacing.

Under the project terminology, the design satisfies the retrofocus test `BFD > EFL` at the wide and intermediate positions but not at the telephoto position. The lens is therefore not labeled globally as a retrofocus design. It also does not meet the project's `TL/EFL < 1` criterion for a telephoto-form optical system at any of the three modeled states; “telephoto end” below refers only to the patent's zoom-position terminology.

The patent does not publish clear-aperture semi-diameters or a physical stop diameter. All authored surface semi-diameters, including the 12.3 mm stop clear-aperture envelope, are modeling values derived from ray envelopes, the published section drawing, and mechanical constraints. They are not presented as patent dimensions.

## Element-by-Element Analysis

The focal length reported on each medium below is the **standalone thick-lens focal length in air** stored in the final data file. Cemented-stack and group powers are stated separately where useful because they are not the arithmetic sum of the standalone values.

### D1 — L1 Negative Meniscus + L2 Biconvex Positive

**L1:** nd = 1.92286, νd = 20.88. Glass: E-FDS1 (Hoya). Standalone f = -180.133 mm.<br>
**L2:** nd = 1.80420, νd = 46.50. Glass: TAF3 (Hoya). Standalone f = +156.518 mm.

L1 and L2 share the surface-2 cemented interface. Their opposing standalone powers nearly cancel when combined: the computed D1 cemented-stack focal length is +1182.009 mm. D1 therefore functions as a weakly positive front component inside the much stronger positive LG1 rather than as a strongly powered positive doublet by itself.

The high index of both media allows substantial surface bending without requiring extreme curvature at the large front diameter. The large difference in νd between L1 and L2 also supplies first-order chromatic balancing within the pair. E-FDS1 and TAF3 are catalog matches to the patent coordinates; the patent itself does not identify the production melts, so no secondary-spectrum claim is inferred from the names alone.

### L3 — Positive Meniscus

nd = 1.80420, νd = 46.50. Glass: TAF3 (Hoya). Standalone f = +126.458 mm.

L3 is the rear singlet of LG1. Its positive standalone power is much stronger than the weak net power of D1, so it contributes materially to the +114.154 mm power of the complete front group. The common nd/νd coordinate with L2 also keeps the front group material palette compact while allowing L3 to work as an air-spaced positive component rather than part of the cemented pair.

### H1 / Physical L4 — L4r Bonded Aspheric Layer + L4g Substrate

**L4r:** nd = 1.51460, νd = 49.96. Glass: Unmatched (hybrid-asphere resin layer; nd=1.51460, vd=49.96). Standalone f = -310.092 mm.<br>
**L4g:** nd = 1.83400, νd = 37.34. Glass: NBFD10 (Hoya). Standalone f = -24.971 mm.

The data file models these as two optical media because the prescription explicitly changes index at surface 7, but they represent one physical hybrid-aspherical element for the 17-element product count. The 0.3000 mm L4r layer carries the aspherical surface 6A and is bonded to the much more strongly powered L4g substrate.

Computed together, H1 has a cemented-stack focal length of -23.062 mm. The hybrid component is therefore the principal negative front member of LG2. The thin layer's separate standalone focal length should not be interpreted as an independently mounted lens; its optical significance is its refractive-index transition and aspherical boundary within the bonded component.

### D2 — L5 Biconcave Negative + L6 Biconvex Positive

**L5:** nd = 1.71300, νd = 53.94. Glass: LAC8 (Hoya). Standalone f = -19.381 mm.<br>
**L6:** nd = 1.90366, νd = 31.31. Glass: TAFD25 (Hoya). Standalone f = +18.849 mm.

L5 and L6 are a strongly opposed cemented pair inside negative LG2. Although their isolated powers are large and opposite, the computed D2 cemented stack is only weakly positive, with f = +199.785 mm. This distinction is important: the strong negative power of LG2 does not come from D2 in isolation, but from the combined action of H1, D2, L7, their internal separations, and the external group boundaries.

The pair also places a moderate-dispersion negative medium against a high-index, lower-Abbe positive medium. That index/dispersion contrast is consistent with first-order chromatic balancing while maintaining the required group power. LAC8 is an exact current HOYA coordinate match; TAFD25 differs from the patent only by +0.01 in the current catalog νd value.

### L7 — Negative Meniscus

nd = 1.49700, νd = 81.61. Glass: FCD1 (Hoya). Standalone f = -88.301 mm.

L7 closes LG2 as an air-spaced negative meniscus. Its very high νd is the first of three 1.49700 / 81.61 media in the prescription, each matching HOYA FCD1 at the patent coordinates. In first-order terms, this lets the rear of the negative variator carry negative optical power with comparatively low d-line dispersion.

Tamron’s A007 construction diagram marks three LD elements at the same three positions represented by L7, L9, and L13. The FCD1 assignment is a catalog identification consistent with that map; the patent itself neither uses the production “LD” label nor names a glass supplier.

### L8 — Biconvex Positive, Two Aspherical Surfaces

nd = 1.61881, νd = 63.85. Glass: M-PCD4 (Hoya). Standalone f = +48.663 mm.

L8 is the first element after the aperture stop and the front member of positive subgroup G31. Both surfaces, 15A and 16A, are aspherical. Its location immediately behind the stop gives those surfaces strong leverage over the shape of the converging axial and oblique bundles while L8 itself supplies substantial positive power.

Surface 15A is the only Example 4 asphere whose standard conic constant is not zero: K = -0.9117. Surface 16A uses a spherical base, K = 0, with polynomial departure. The two-sided treatment allows the element's front and rear surface forms to be controlled independently rather than assigning all non-spherical correction to one boundary. M-PCD4 is an exact HOYA coordinate match, and this element occupies one of the three positions that Tamron marks as glass-molded aspherical in the A007 construction diagram.

### D3 — L9 Biconvex Positive + L10 Negative Meniscus

**L9:** nd = 1.49700, νd = 81.61. Glass: FCD1 (Hoya). Standalone f = +39.380 mm.<br>
**L10:** nd = 1.90366, νd = 31.31. Glass: TAFD25 (Hoya). Standalone f = -76.093 mm.

D3 is a positive cemented pair behind L8 within G31. Its computed cemented focal length is +81.056 mm, so the pair remains positively powered despite L10's negative standalone power. Together with L8 it yields G31 = +32.069 mm.

This pair also contains the strongest explicit νd contrast in G31: the high-Abbe L9 is cemented to a high-index, low-Abbe L10. The pairing supports primary chromatic correction of the positive subgroup. Example 4 does not publish `nC`, `nF`, `ng`, or `dPgF`; the catalog matches therefore remain material-model evidence rather than a patent statement of apochromatic or anomalous-partial-dispersion behavior.

### D4 / G32 — L11 Biconcave Negative Asphere + L12 Positive Meniscus

**L11:** nd = 1.69350, νd = 53.20. Glass: M-LAC130 (Hoya). Standalone f = -29.638 mm.<br>
**L12:** nd = 1.75520, νd = 27.53. Glass: E-FD4 (Hoya). Standalone f = +71.063 mm.

D4 is identical to the patent's negative stabilization subgroup G32 in the modeled prescription. Its computed cemented focal length is -50.245 mm. Surface 20A, the front surface of L11, is aspherical; L12 is its positive cemented partner. M-LAC130 is an exact HOYA coordinate match and is consistent with the glass-molded aspherical designation at this position in Tamron's A007 construction diagram.

The patent specifies that G32 moves in directions orthogonal to the optical axis for image-blur compensation. This is lateral stabilization motion, not axial focusing motion. No stabilization decenter magnitude is published for Example 4, and none is invented in the data file.

The negative net power of G32 is significant because a lateral translation of a powered subgroup changes the outgoing ray direction. The patent's design objective is to obtain that stabilizing action with a subgroup compact enough to keep the compensation mechanism practical in a full-frame, large-aperture zoom.

### L13 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (Hoya). Standalone f = +36.076 mm.

L13 is the first element of LG4 and the third FCD1-coordinate high-Abbe member. It is a strong positive singlet and provides the initial convergence of the rear group. Its positive power is later redistributed by the weak-net D5 pair, the negative two-asphere L16, and the final positive L17.

Because L13 is air-spaced from the stabilization subgroup, it is not part of the laterally moving G32 assembly. The D(22) gap between G32 and L13 shrinks from 8.1524 mm to 1.2000 mm over the published wide-to-tele zoom range, one of the principal zoom-coupling spacings.

### D5 — L14 Biconcave Negative + L15 Biconvex Positive

**L14:** nd = 1.90366, νd = 31.31. Glass: TAFD25 (Hoya). Standalone f = -39.315 mm.<br>
**L15:** nd = 1.71300, νd = 53.94. Glass: LAC8 (Hoya). Standalone f = +39.257 mm.

The isolated powers of L14 and L15 are almost equal in magnitude and opposite in sign. The cemented pair therefore has a weak positive net power, with computed f = +696.718 mm. Its principal first-order role is not to supply most of LG4's convergence; instead, it inserts a closely coupled high-index/dispersion contrast within the positive rear group while leaving the net group power to the surrounding singlets.

### L16 — Biconcave Negative, Two Aspherical Surfaces

nd = 1.82080, νd = 42.71. Glass: M-TAFD51 (Hoya). Standalone f = -87.867 mm.

L16 is the rear group's explicitly negative aspherical singlet. Both surfaces, 28A and 29A, carry polynomial aspheric departure on spherical bases. Its negative standalone power opposes L13 and the final L17 while providing two additional controlled surfaces near the image side of the system. M-TAFD51 is an exact HOYA coordinate match, again at one of the three A007 glass-molded aspherical positions.

The largest fourth-order coefficient in Example 4 is on surface 29A, A4 = +2.25411×10^-5 mm^-3. That numerical fact describes the polynomial strength in the patent convention; it is not by itself a statement about aberration sign, because the full surface sag, base radius, ray height, and higher-order terms determine the optical effect.

### L17 — Positive Meniscus

nd = 1.74330, νd = 49.22. Glass: NBF1 (Hoya). Standalone f = +190.950 mm.

L17 is the final optical element before the image-space gap D(31). It is a relatively weak positive meniscus in standalone terms. In combination with the preceding elements it leaves LG4 with a net focal length of +45.649 mm and completes the rear correction before the image plane.

The patent's D(31) values are the axial distances from surface 31 to the image plane in each zoom state. They are retained directly as the final variable spacing, rather than being replaced by the production lens's mount-flange or barrel-length dimensions, which use different reference planes.

## Glass Identification and Selection

Example 4 publishes Fraunhofer d-line refractive indices and Abbe numbers but no supplier names. A fresh coordinate search against current official HOYA, OHARA, and HIKARI catalogs was therefore performed without using the authored labels as starting assumptions. The strongest coherent palette is HOYA: ten of the eleven non-resin coordinate sets are exact current HOYA matches, and TAFD25 differs only by +0.01 in νd. The three aspherical glass elements that Tamron marks as glass-molded in the A007 construction diagram also land on exact HOYA M-series coordinates, while the three production LD positions land on the FCD1 coordinate.

This coherence supports named HOYA catalog matches in the model, but it does not prove the supplier or production melt. Several coordinates also have exact or near-exact OHARA or HIKARI equivalents. The names below are therefore **catalog-derived material assignments**, not patent facts.

| Authored glass | Patent nd | Patent νd | Current HOYA coordinate | Residual | Used in |
|---|---:|---:|---|---|---|
| E-FDS1 (Hoya) | 1.92286 | 20.88 | 1.92286 / 20.88 | Δn = 0, Δνd = 0 | L1 |
| TAF3 (Hoya) | 1.80420 | 46.50 | 1.80420 / 46.50 | Δn = 0, Δνd = 0 | L2, L3 |
| Unmatched hybrid-asphere resin layer | 1.51460 | 49.96 | no defensible match within the audit window | — | L4r |
| NBFD10 (Hoya) | 1.83400 | 37.34 | 1.83400 / 37.34 | Δn = 0, Δνd = 0 | L4g |
| LAC8 (Hoya) | 1.71300 | 53.94 | 1.71300 / 53.94 | Δn = 0, Δνd = 0 | L5, L15 |
| TAFD25 (Hoya) | 1.90366 | 31.31 | 1.90366 / 31.32 | Δn = 0, Δνd = +0.01 | L6, L10, L14 |
| FCD1 (Hoya) | 1.49700 | 81.61 | 1.49700 / 81.61 | Δn = 0, Δνd = 0 | L7, L9, L13 |
| M-PCD4 (Hoya) | 1.61881 | 63.85 | 1.61881 / 63.85 | Δn = 0, Δνd = 0 | L8 |
| M-LAC130 (Hoya) | 1.69350 | 53.20 | 1.69350 / 53.20 | Δn = 0, Δνd = 0 | L11 |
| E-FD4 (Hoya) | 1.75520 | 27.53 | 1.75520 / 27.53 | Δn = 0, Δνd = 0 | L12 |
| M-TAFD51 (Hoya) | 1.82080 | 42.71 | 1.82080 / 42.71 | Δn = 0, Δνd = 0 | L16 |
| NBF1 (Hoya) | 1.74330 | 49.22 | 1.74330 / 49.22 | Δn = 0, Δνd = 0 | L17 |

The hybrid layer is treated separately from its NBFD10-coordinate substrate because the patent explicitly changes refractive index at surface 7. Tamron's construction diagram identifies the corresponding physical element as a hybrid asphere, supporting the interpretation of the 0.3000 mm medium as a bonded aspherical layer rather than an independently mounted lens.

No `nC`, `nF`, `ng`, or `dPgF` values are copied into the element records because Example 4 does not publish them. Catalog-resolved HOYA names may provide Sellmeier dispersion to the runtime, but that catalog model must not be mistaken for patent-published line indices or proof of the exact production melt. No APO or anomalous-partial-dispersion claim is made.

## Focus Mechanism

The modeled focus status is **NO_INTERNAL_RECONSTRUCTION**.

Example 4 and Figs. 23–28 publish optical states at infinity focus. The patent gives no close-focus spacing table for this embodiment, no axial focus-group travel, and no set of adjacent-gap constraints sufficient to solve a unique internal focus motion. Tamron's production specification gives a minimum focus distance of 0.38 m and maximum magnification of 1:5 at 70 mm, but those marketing values do not determine which patent group moves axially or by how much.

Accordingly, every authored zoom `var` entry uses identical infinity and close values at each zoom control point. The `closeFocusM` field retains the manufacturer-published 0.38 m value as catalog metadata, while the optical model remains an infinity-focus zoom model. No unit-focus, inner-focus, rear-focus, or floating-focus classification is assigned because the required internal kinematic evidence is absent.

Tamron documents USD autofocus drive for the production lens, but the motor type does not identify a unique Example 4 axial focus solution. The patent's lateral motion of G32 is separately modeled and interpreted as image stabilization architecture, not focusing.

## Aspherical Surfaces

Example 4 has six aspherical surfaces in the final data file: **6A, 15A, 16A, 20A, 28A, and 29A**. They occur on the modeled hybrid layer L4r, both surfaces of L8, the front surface of L11, and both surfaces of L16.

The patent writes the sag as

$$
z = \frac{h^2}{R\left(1+\sqrt{1-\epsilon h^2/R^2}\right)} + A h^2 + B h^4 + C h^6 + D h^8 + E h^{10} + F h^{12}.
$$

LensVisualizer uses the standard conic term `sqrt(1 - (1+K)(h/R)^2)`. The exact conversion for this patent is therefore

$$
K = \epsilon - 1.
$$

The patent's quadratic `A h^2` term is zero for every Example 4 asphere. The final data stores the published fourth- through tenth-order terms as A4 through A10. A12 and A14 are zero-valued schema fields because Example 4 publishes no corresponding higher-order coefficients; they are not represented as independently published patent values.

| Surface | Element | K | A4 (mm^-3) | A6 (mm^-5) | A8 (mm^-7) | A10 (mm^-9) |
|---|---|---:|---:|---:|---:|---:|
| 6A | L4r | 0.0000 | +1.43821×10^-5 | -2.52546×10^-8 | +7.46124×10^-11 | -1.61976×10^-13 |
| 15A | L8 front | -0.9117 | +1.63947×10^-6 | +2.74286×10^-8 | -1.09388×10^-10 | +6.10564×10^-13 |
| 16A | L8 rear | 0.0000 | +5.27374×10^-6 | +4.71512×10^-9 | +1.56698×10^-10 | -8.27035×10^-13 |
| 20A | L11 front | 0.0000 | +4.43544×10^-6 | -5.49207×10^-10 | +1.55881×10^-11 | -1.14261×10^-13 |
| 28A | L16 front | 0.0000 | +5.26332×10^-6 | -5.66812×10^-9 | -6.55846×10^-12 | -1.35552×10^-13 |
| 29A | L16 rear | 0.0000 | +2.25411×10^-5 | +1.29573×10^-8 | +3.31551×10^-11 | -6.66568×10^-14 |

Surface 6A is the aspherical boundary on the thin bonded medium at the front of LG2. Its departure is dominated at low radial order by positive A4, with alternating higher-order terms shaping the periphery. Surfaces 15A and 16A form a two-sided aspherical positive element directly behind the stop; 15A additionally uses the strongly negative standard conic constant K = -0.9117. Surface 20A places an asphere directly on the laterally moving negative stabilization subgroup. Surfaces 28A and 29A provide a second two-sided aspherical element near the rear of LG4.

The signs of individual polynomial coefficients are not treated as one-term aberration labels: their optical effect depends on base curvature, ray height, the complete polynomial, and position in the system. No asphere departure values are quoted here because the patent publishes no surface clear-aperture heights; the data-file semi-diameters are inferred model geometry rather than source aperture dimensions.

No scaling transformation is applied to the aspheres. Since s = 1, all radii, spacings, and image-plane coordinates remain at patent scale, each A_p coefficient remains numerically unchanged, and K remains unchanged.

## Chromatic Correction Strategy

Example 4 distributes large νd contrasts through several cemented pairs rather than concentrating chromatic balancing in one group. D1 combines νd = 20.88 and 46.50; D2 combines 53.94 and 31.31; D3 combines 81.61 and 31.31; D4 combines 53.20 and 27.53; and D5 combines 31.31 and 53.94. These pairings couple positive and negative powers with different d-line dispersions while the air-spaced groups establish the zoom power distribution.

The three FCD1-coordinate media, L7, L9, and L13, are distributed across LG2, G31, and LG4. Tamron's A007 construction diagram marks these same three positions as LD elements, so the production correlation is stronger than an nd/νd coincidence alone. The patent, however, publishes neither the production LD designation nor line-index or partial-dispersion data for these materials.

The named HOYA materials provide a validated catalog model for matched coordinates, but they remain catalog-derived assignments rather than source-specified melts. The analysis therefore describes the first-order dispersion strategy and material matches without claiming apochromatic correction or anomalous-partial-dispersion behavior.

## Conditional Expressions

US 8,810,918 B2 defines three design conditions relevant to the Example 4 architecture. Independent computation from the final data arrays reproduces the patent's rounded Example 4 values.

### Condition (5): balance of front and rear composite powers

$$
0.7 < \frac{F_{12W}F_{12T}}{F_{34W}F_{34T}} < 1.1
$$

The computed value is **0.875642333**, versus the patent's rounded **0.876**. The underlying computed terms are F12W = -25.585444 mm, F12T = -40.849810 mm, F34W = +36.172361 mm, and F34T = +32.997375 mm.

This condition regulates how strongly the first two groups act relative to the last two over the zoom range. The patent links that balance to keeping both the front section and the stabilization/focus-side mechanism from becoming excessively large.

### Condition (6): stop-to-image distance at the wide end

$$
3.2 < \frac{ST_W}{F_W} < 4.0
$$

The computed value is **3.794145749**, versus the patent's rounded **3.794**, using ST_W = 93.7154 mm and F_W = 24.7 mm.

The stop is therefore placed far enough forward of the image plane to leave mechanical and optical space in the rear half of the zoom while remaining within the patent's prescribed envelope.

### Condition (7): third- to fourth-group focal-length ratio

$$
1.0 < \frac{F_3}{F_4} < 1.5
$$

The computed wide-state value is **1.301806343**, versus the patent's rounded **1.302**, using F3 = +59.426398 mm and F4 = +45.649185 mm. Example 4 varies D(19), so the composite LG3 focal length changes slightly with zoom. The patent's printed 1.302 is reproduced by the wide-state interpretation.

All three conditions pass their stated inequalities. They are patent-level architectural constraints, not empirical performance scores.

## Image Stabilization

The patent's stabilization mechanism is optically specific: subgroup **G32** is a negative subgroup within positive LG3 and is moved laterally, orthogonal to the optical axis, to compensate for image displacement caused by camera shake. In the final model G32 is exactly cemented pair D4, L11 + L12, with computed net focal length **-50.245 mm**.

This lateral motion is distinct from zoom and focus. Zoom changes the axial spacing D(19) between G31 and G32, while the stabilization action translates G32 across the optical axis. The data file does not invent a decenter magnitude, actuator stroke, or stabilized off-axis prescription because Example 4 does not publish those values.

The production A007's Canon EF and Nikon F versions used Tamron's VC implementation. Tamron's official specification material states that the Sony A version omitted the lens VC unit because stabilization was supplied by the camera body. The `sony-a` mount remains in the data because it is a production mount variant of the same lens family; the patent architecture describes the optically stabilized form.

## Verification Summary

The final prescription was independently re-entered from the rendered Example 4 table and evaluated in both height/reduced-angle and height/angle ABCD form. The two matrix formulations agree to numerical precision. EFL and paraxial BFD reproduce the patent values within 0.003 mm at all three published zoom states.

| State | Computed EFL | Computed BFD | S1→image track | H1 from S1 | H2 from S31 | TL/EFL |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 24.699827 mm | 40.324769 mm | 151.3154 mm | +50.4101 mm | +15.6249 mm | 6.1262 |
| Intermediate | 42.499325 mm | 53.222675 mm | 164.0538 mm | +81.8620 mm | +10.7234 mm | 3.8602 |
| Tele | 67.797751 mm | 63.207260 mm | 181.8388 mm | +119.7987 mm | -4.5905 mm | 2.6821 |

Principal-plane offsets are signed positive toward image space. The BFD exceeds EFL at the wide and intermediate states but not at tele, so the design is not globally classified as retrofocus. The total-track ratio remains greater than one at every state, so it does not meet the project's telephoto-form criterion `TL/EFL < 1`.

For the modeled F/2.9 aperture, the entrance-pupil radii are **4.258591 / 7.327470 / 11.689267 mm** at wide/intermediate/tele. The corresponding active stop radii are **9.190403 / 10.659036 / 11.915259 mm**. The authored `STO.sd = 12.3 mm` is therefore a clear-aperture envelope with positive margin at each state, not a patent-published diaphragm measurement.

The signed Petzval sum, computed surface by surface as `φ/(n·n′)`, is **+0.00130255284 mm^-1**, corresponding to a signed reciprocal of approximately **+767.723 mm**. This is a first-order field-curvature quantity rather than a prediction of the final higher-order best-focus surface.

The modeled semi-diameters pass independent geometry checks. Minimum edge thickness is **0.431794 mm** at the L4r bonded layer; maximum actual rim slope is **63.546°** at surface 8; and the maximum shared-band cross-gap intrusion ratio is **0.863862** at S8→S9 in the wide state, below the 0.90 limit. Exact meridional Snell traces of the active F/2.9 on-axis marginal pair and the default 0.60-field bundle at all three zoom states remain inside every authored clear aperture; the smallest traced clearance is approximately **0.238 mm** at the telephoto on-axis marginal ray.

The patent publishes no clear-aperture heights, so the six asphere departures are not treated as source dimensions. They were nevertheless checked at the authored modeled semi-diameters for geometry validation. No K > 0 surface is present, so no finite conic-height cap is active.

No sensor cover plate, filter, inactive dummy plane, flare cutter, or mechanical surface occurs in the Example 4 sequential prescription. No air-equivalent plate compensation is therefore required. All authored axial spacings are non-negative, and no close-focus state is reconstructed.

## Sources / References

- Dayong Li, **US 8,810,918 B2, “Large-Aperture Zoom Lens,”** Tamron Co., Ltd., granted August 19, 2014. Example 4, Figs. 22–28, and the printed pp. 11–13 numerical tables provide the prescription, zoom spacings, aspheres, and conditions.
- [Tamron SP 24-70mm F/2.8 Di VC USD (Model A007) specifications](https://www.tamron.com/global/consumer/lenses/a007/spec.html) — production mounts, 17 elements / 12 groups, minimum focus, magnification, diaphragm, and Sony VC note.
- [Tamron SP 24-70mm F/2.8 Di VC USD (Model A007) product page](https://www.tamron.com/global/consumer/lenses/a007/) — production identity and VC/optical-design context.
- [Tamron April 2012 A007 catalog](https://s3-ap-northeast-1.amazonaws.com/tamron-docs/consumer/support/download/catalog/a007_en.pdf) — contemporary lens-construction diagram and the XR / LD / hybrid-aspherical / glass-molded-aspherical element map.
- [HOYA Optical Glass data](https://www.hoya-opticalworld.com/english/datadownload/index.html), [OHARA optical-glass catalog resources](https://www.ohara-inc.co.jp/en/product/catalog/), [HIKARI optical-glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx), [SCHOTT optical-glass resources](https://www.schott.com/en-us/products/optical-glass-p1000267/downloads), [SUMITA optical-glass resources](https://www.sumita-opt.co.jp/en/download/), and [CDGM Glass](https://cdgmglass.com/) were consulted for the independent material audit. The authored HOYA names are catalog-derived coordinate matches, not patent-stated supplier identities.
