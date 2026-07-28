# PENTAX HD DA\* 11-18mm f/2.8 ED DC AW

## Patent Reference and Design Identification

**Patent:** US 2018/0164556 A1  
**Application Number:** 15/825,178  
**Priority:** 9 December 2016, JP 2016-239192  
**Filed:** 29 November 2017  
**Published:** 14 June 2018  
**Inventor:** Takahiko Ohishi  
**Applicant:** Takahiko Ohishi  
**Title:** “Zooming Optical System”  
**Embodiment analyzed:** Numerical Example 1

This analysis treats Numerical Example 1 as the selected production correlation for the PENTAX HD DA\* 11-18mm f/2.8 ED DC AW. The patent does not name the production lens, and its published applicant is Takahiko Ohishi rather than Pentax Corporation, Ricoh Imaging, or another manufacturer. The relationship is therefore an authorial correlation fixed by the job card, not a manufacturer-confirmed identification.

Several independent characteristics support the correlation:

1. The patent publishes focal lengths of 11.25, 14.00, and 17.70 mm; independent paraxial calculation gives 11.250415, 13.999979, and 17.697394 mm. These values closely bracket the marketed 11–18 mm range.
2. Numerical Example 1 is a constant-f/2.8 zoom at all three published stations, matching the marketed maximum aperture.
3. The LensVisualizer model contains 16 material elements in 11 air-spaced construction groups. Ricoh specifies 16 elements in 11 groups for the production lens.
4. The patent uses a 14.24 mm image height, equivalent to a 28.48 mm image-circle diameter, which is consistent with an APS-C-format design.
5. The patent’s full field decreases from 105.2° to 76.8°. Ricoh publishes a diagonal angle of view of 104° to 76° for the production lens.
6. The patent priority and publication dates precede Ricoh’s January 2019 announcement by a plausible development interval.
7. Both the patent example and the production lens are constant-aperture, ultra-wide APS-C SLR zooms requiring substantial back focus.

The special-element description is not an exact match. Ricoh states that the production lens contains one ED glass-molded aspherical element, two additional ED elements, and two additional aspherical elements. Numerical Example 1 likewise contains three very-low-dispersion material classes and three aspherical material elements, but the low-dispersion and aspherical locations do not overlap: the aspheres are on L11, the L12 hybrid, and L44, while the lowest-dispersion classes occur at L24, L41, and L43. This placement mismatch prevents the patent example from being represented as a confirmed production prescription even though the principal focal, aperture, format, count, and timing evidence converges.

The prescription is unscaled. All radii, axial spacings, image-plane distances, and aspherical coefficients retain the patent’s millimetric values. No sensor cover glass, filter, dummy plane, flare cutter, or mechanical surface is included. The patent example contains no omitted plate requiring an air-equivalent rear-spacing correction.

## Optical Architecture

Numerical Example 1 is a four-moving-group negative-positive-negative-positive zoom. The strong negative first group establishes the wide-angle retrofocus form; the second and fourth groups are positive; and the third group is a compact negative cemented doublet. The aperture stop lies between G2 and G3 and remains 2.508 mm in front of G3, moving with that group as stated in ¶0127.

The model has 16 material elements in 11 air-spaced construction groups. The patent describes 15 nominal lenses because L12 is treated as one hybrid lens; LensVisualizer separates its glass body and bonded synthetic-resin layer into two material elements. Five bonded sets are represented: the L12 glass-resin hybrid, L14/L15, L21/L22, L31/L32, and L42/L43.

The functional group powers are computed from the final data arrays rather than inferred from element signs:

| Power group | Surfaces | Computed EFL | Patent EFL | Function in the architecture |
|---|---:|---:|---:|---|
| G1 | 1A–10 | −13.879082 mm | −13.88 mm | Strong negative front group establishing the retrofocus entrance geometry |
| G2 | 11–17 | +36.149188 mm | +36.15 mm | Positive variator group containing the reconstructed focusing subgroup |
| G3 | 19–21 | −55.833594 mm | −55.83 mm | Weak negative cemented group moving with the stop |
| G4 | 22–28A | +33.034696 mm | +33.03 mm | Positive rear group completing image formation and rear-field correction |

The system is retrofocus at every published zoom station under the project definition because back focal distance exceeds effective focal length. It is not telephoto: total track is many times the effective focal length at all three positions.

With the designed image plane held fixed, the wide-to-tele group-station changes are:

| Station | Wide-to-tele motion | Direction |
|---|---:|---|
| G1 front | 4.707 mm | Toward the object |
| G2 front | 14.030 mm | Toward the object |
| Stop and G3 front | 1.510 mm | Net toward the object |
| G4 front | 10.740 mm | Toward the object |

These are net changes between the three published stations. The patent’s continuous movement diagram shows that G1 first moves imageward and reverses, while G3 also follows a reversing path in Numerical Example 1. The three tabulated states preserve the numerical endpoints but do not resolve the complete cam curves between them.

The architecture combines a high-powered negative front assembly with a long rear clearance. At infinity focus, the computed back focal distance increases from 38.140406 mm at 11.25 mm to 48.877342 mm at 17.70 mm. This is the defining mechanical requirement of an ultra-wide SLR zoom rather than a compact mirrorless wide-angle arrangement.

## Element-by-Element Analysis

The focal lengths in this section are standalone, isolated-in-air element powers computed from the final data file. They are not the powers of the bonded sets or the in-situ power groups. Cemented net powers and group powers are stated separately where they materially alter the interpretation.

### G1 — Negative Front Group

#### L11 — Negative Meniscus with Object-Side Asphere

**nd = 1.69350, νd = 53.2. Glass: 694532 class (vendor unproven). Isolated-in-air f = −43.035 mm.**

L11 is the large front negative meniscus and the first contributor to the system’s strong retrofocus divergence. Its very weakly convex object-side base curvature and much stronger rear curvature spread the negative power across a physically large front element. Surface 1A is aspherical, allowing the first surface to depart from a simple sphere while retaining the published paraxial power.

The element’s role is architectural rather than merely corrective: it expands the angular bundle before the following negative elements and permits the long back focus required by the APS-C SLR format. The specific higher-order correction supplied by surface 1A is an interpretation from its location and coefficient set; the patent attributes aberration control primarily to the group arrangement rather than to a quantified contribution from L11 alone.

#### L12g — Glass Body of the Negative Hybrid Lens

**nd = 1.78000, νd = 50.9. Glass: Unmatched (780509 class; no defensible current-catalog identity recovered). Isolated-in-air f = −34.562830 mm.**

L12g is a negative meniscus glass substrate. It carries most of the hybrid component’s refractive power and is bonded directly to the thin L12r resin layer at surface 4. The patent explicitly describes L12 as a negative hybrid lens with a synthetic-resin aspherical layer on its image-side surface (¶0065, ¶0128).

Its isolated power must not be confused with the power of the complete hybrid. Once the resin layer and internal interface are retained, the L12 hybrid has a computed standalone net EFL of −37.985827 mm.

#### L12r — Bonded Synthetic-Resin Aspherical Layer

**nd = 1.52972, νd = 42.7. Glass: Synthetic resin layer (patent-defined hybrid asphere). Isolated-in-air f = +369.757723 mm.**

L12r is a 0.200 mm center-thickness resin layer bonded to L12g. Its isolated positive power is weak, and the complete glass-resin assembly remains decisively negative. It should therefore not be counted as an independent positive lens in the patent’s nominal element description, although it is a separate material element in the LensVisualizer data model.

Surface 5A is the resin’s exposed aspherical surface. The hybrid construction places higher-order shaping on a thin bonded layer rather than requiring the entire high-index glass body to carry the aspherical figure.

#### L13 — Biconcave Negative Singlet

**nd = 1.81000, νd = 37.2. Glass: Unmatched (810372 class; no defensible current-catalog identity recovered). Isolated-in-air f = −38.062334 mm.**

L13 is the third negative component in the front group. Its biconcave form distributes G1’s divergence after the two meniscus components and before the positive cemented pair. The comparatively high index allows substantial negative power without exceptionally deep curvatures on both sides.

In system terms, L13 strengthens the negative front block while leaving the final L14/L15 pair to provide the positive cemented correction specifically emphasized by the patent.

#### L14 — Positive Member of the G1 Cemented Pair

**nd = 1.54732, νd = 46.0. Glass: 547460 class (soft catalog neighborhood only; vendor unproven). Isolated-in-air f = +21.259099 mm.**

L14 is a strongly positive biconvex element. Its isolated power is considerably stronger than the net power of the complete cemented pair because the bonded L15 element supplies opposing power at the shared surface.

The patent identifies the L14/L15 assembly as a positive cemented lens within G1 and associates that arrangement with correction of aberrations produced by the negative front components (¶0065, ¶0077, ¶0100).

#### L15 — Negative Meniscus Closing the G1 Cemented Pair

**nd = 1.85000, νd = 44.0. Glass: Unmatched (850440 class; no defensible current-catalog identity recovered). Isolated-in-air f = −27.467064 mm.**

L15 is negative in isolation, despite being part of a net-positive cemented component. Its high index and meniscus form oppose part of L14’s strong positive power while changing the chromatic and higher-order behavior of the bonded pair.

The L14/L15 cemented set has a computed standalone net EFL of +88.057471 mm. G1 as a whole remains much stronger and negative at −13.879082 mm because the four preceding negative material elements dominate its in-situ power balance.

### G2 — Positive Variator and Reconstructed Focusing Group

#### L21 — Positive Front Member of the G2 Doublet

**nd = 1.56732, νd = 42.8. Glass: 567428 class (vendor unproven). Isolated-in-air f = +26.673027 mm.**

L21 is a biconvex positive element and the first lens of G2. It is cemented to L22 and belongs to the three-element front subgroup that the patent permits to act as a focusing unit in some embodiments (¶0067).

Its strong standalone positive power is moderated by L22. The resulting L21/L22 cemented doublet has a computed standalone net EFL of +101.901282 mm rather than the much shorter focal length of L21 alone.

#### L22 — Negative Meniscus in the G2 Doublet

**nd = 1.81600, νd = 46.6. Glass: 816466 class (vendor unproven). Isolated-in-air f = −36.092608 mm.**

L22 is the negative member of the G2 front doublet. The cemented interface at surface 12 is assigned to L22 in the data model, following the downstream-element rule. Its sign and position reduce the strong positive action of L21 while retaining a positive net doublet.

The doublet and the following L23 move together in the constrained close-focus reconstruction. No relative motion within L21/L22/L23 is introduced.

#### L23 — Positive Rear Singlet of the Focusing Subgroup

**nd = 1.56406, νd = 46.3. Glass: Unmatched (564463 class; no defensible current-catalog identity recovered). Isolated-in-air f = +93.208271 mm.**

L23 is a weak biconvex positive singlet separated from the L21/L22 doublet by only 0.200 mm of air. Together, L21, L22, and L23 form the front portion of G2 described in ¶0067.

In the reconstructed focus model, this entire three-element subgroup moves toward the image. The air gap after L23 decreases by the same amount that the preceding G1-to-subgroup gap increases, preserving the axial station of L24.

#### L24 — Low-Dispersion Positive Meniscus

**nd = 1.49700, νd = 81.6. Glass: 497816 ED-crown class (vendor unproven). Isolated-in-air f = +118.544960 mm.**

L24 is the rear element of G2 and has a low-dispersion crown-class index pair. It remains fixed relative to the other zoom groups in the constrained focus solve while the L21/L22/L23 subgroup translates ahead of it.

The element’s weak positive power supplements G2 without requiring the focusing subgroup itself to carry the entire positive group power. Its low dispersion also separates part of the chromatic correction from the higher-index elements in the moving front subgroup. This is a design interpretation from the final prescription; the patent does not identify a vendor glass or publish partial-dispersion data for L24.

### G3 — Negative Cemented Group Moving with the Stop

#### L31 — Biconcave Negative Member of G3

**nd = 1.80400, νd = 46.6. Glass: 804466 class (vendor unproven). Isolated-in-air f = −18.958221 mm.**

L31 is a strong biconcave negative element immediately behind the moving stop. Its isolated power is much stronger than the net power of G3 because L32 supplies substantial positive compensation at the cemented interface.

The stop-to-L31 spacing remains fixed at 2.508 mm, so the stop and the complete G3 doublet form one rigid zooming station in the model.

#### L32 — Positive Meniscus Completing G3

**nd = 1.84666, νd = 23.8. Glass: 847238 dense-flint class (vendor unproven). Isolated-in-air f = +29.122124 mm.**

L32 is a high-index, high-dispersion positive meniscus bonded to L31. Its positive power reduces the strong negative action of L31, leaving a comparatively weak negative cemented group.

The L31/L32 cemented set and G3 are the same optical assembly, so both have a computed net EFL of −55.833594 mm. This equality is specific to G3; it should not be generalized to the other cemented sets, which form only part of their respective power groups.

### G4 — Positive Rear Group

#### L41 — Very-Low-Dispersion Positive Element

**nd = 1.43875, νd = 95.0. Glass: 439950 extreme-low-dispersion crown class (vendor unproven). Isolated-in-air f = +32.182434 mm.**

L41 is a strong biconvex positive element at the front of G4. Its unusually low index and very high Abbe number place a major positive contribution in a low-dispersion material class.

The element begins the final positive group before the weak negative L42/L43 pair. Its placement gives the rear group substantial positive power without relying exclusively on high-dispersion glass. No anomalous-partial-dispersion claim is made because the patent supplies neither line indices nor dPgF.

#### L42 — Negative Dense-Flint Member of the G4 Pair

**nd = 1.84666, νd = 23.8. Glass: 847238 dense-flint class (vendor unproven). Isolated-in-air f = −27.823051 mm.**

L42 is a biconcave negative element using the same index/Abbe class as L32. It is bonded to the low-dispersion positive L43 and supplies the high-dispersion side of that pair.

The isolated negative power is strong, but the cemented pair is only weakly negative after L43 is included. This distinction is important: L42 is not itself a weak element even though the complete D4 pair has a long negative focal length.

#### L43 — Low-Dispersion Positive Member of the G4 Pair

**nd = 1.49700, νd = 81.6. Glass: 497816 ED-crown class (vendor unproven). Isolated-in-air f = +33.539367 mm.**

L43 is a biconvex positive element and the low-dispersion partner to L42. The pair combines a large difference in Abbe number with opposing powers, providing a strong chromatic lever while retaining little net power.

The L42/L43 cemented set has a computed standalone net EFL of −281.667074 mm. It therefore behaves as a weak negative component embedded between the strong positive L41 and the positive final element L44. G4 nevertheless has a net EFL of +33.034696 mm.

#### L44 — Double-Aspherical Positive Meniscus

**nd = 1.51633, νd = 64.1. Glass: 516641 crown class (SUMITA K-BK7 coordinate equivalent; patent vendor unproven). Isolated-in-air f = +174.474776 mm.**

L44 is a weak positive meniscus with aspherical surfaces on both sides. It closes the rear group after the low-dispersion/dense-flint sequence and supplies higher-order shape control near the image side without adding strong paraxial power.

The patent explicitly identifies both surfaces of L44 as aspherical in Numerical Examples 1, 2, and 7 (¶0073). Its rear location is consistent with control of residual off-axis behavior and distortion, but no separate quantitative aberration contribution is assigned to the element because the patent publishes only system-level aberration plots.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number. It does not identify glass manufacturers, trade names, melt codes, C/F/g-line indices, or anomalous partial dispersion. The final data file therefore uses neutral six-digit classes or explicit `Unmatched (...)` labels. Catalog equality establishes an optical equivalence class, not the production melt supplier.

| Data-file glass treatment | nd | νd | Elements | Catalog-audit interpretation |
|---|---:|---:|---|---|
| 694532 class | 1.69350 | 53.2 | L11 | Exact current nd/νd equivalents exist in multiple catalogs; vendor unproven |
| Unmatched 780509 class | 1.78000 | 50.9 | L12g | No defensible current-catalog identity recovered |
| Synthetic resin layer | 1.52972 | 42.7 | L12r | Patent-defined resin; optical-glass catalog matching is inapplicable |
| Unmatched 810372 class | 1.81000 | 37.2 | L13 | No defensible current-catalog identity recovered |
| 547460 class | 1.54732 | 46.0 | L14 | Only a soft neighborhood match; a vendor glass is not asserted |
| Unmatched 850440 class | 1.85000 | 44.0 | L15 | No defensible current-catalog identity recovered |
| 567428 class | 1.56732 | 42.8 | L21 | Exact nd/νd equivalents exist; vendor unproven |
| 816466 class | 1.81600 | 46.6 | L22 | Exact nd/νd equivalents exist; vendor unproven |
| Unmatched 564463 class | 1.56406 | 46.3 | L23 | No defensible current-catalog identity recovered |
| 497816 ED-crown class | 1.49700 | 81.6 | L24, L43 | Low-dispersion crown equivalents exist across several catalogs |
| 804466 class | 1.80400 | 46.6 | L31 | Exact nd/νd equivalents exist; vendor unproven |
| 847238 dense-flint class | 1.84666 | 23.8 | L32, L42 | High-index, high-dispersion equivalents exist across several catalogs |
| 439950 extreme-low-dispersion crown class | 1.43875 | 95.0 | L41 | An exact current OHARA-class equivalent exists; vendor unproven |
| 516641 crown class | 1.51633 | 64.1 | L44 | Exact SUMITA K-BK7 catalog coordinate; patent vendor remains unproven |

The catalog audit adds the vendor-published SUMITA K-BK7 dispersion polynomial for the exact 516641 coordinate. This
raises the model from 9 to 10 coefficient-backed material entries without assigning SUMITA as the patent supplier.
The five other unresolved optical-glass coordinates and the synthetic-resin layer remain on the Abbe fallback because
the reviewed current and obsolete-inclusive catalogs do not provide equally defensible exact matches.

The chromatic strategy is concentrated in the rear half of the system. G2 ends with the low-dispersion L24; G4 combines the extreme-low-dispersion L41 with the dense-flint/low-dispersion L42/L43 pair. This arrangement gives the design large dispersion differences without forcing the weak cemented D4 pair to carry much net power.

The data do not support an apochromatic classification. The presence of very high-νd classes is not sufficient by itself: no per-element nC, nF, ng, dPgF, or validated production-melt Sellmeier assignment is available. The manufacturer’s ED terminology is a product-level statement and does not convert the patent’s neutral nd/νd pairs into confirmed vendor glasses.

## Focus Mechanism

The patent publishes only infinity-focus zoom tables. Paragraph 0067 states that, in some embodiments, the front portion of G2—L21, L22, and L23—may move as a focusing group, while L24 forms the rear portion of G2. This supplies a specific mechanism constraint but not a set of close-focus spacings.

The data file therefore uses `CONSTRAINED_RECONSTRUCTION`, not a published focus model. At each zoom station, the rigid L21/L22/L23 subgroup translates toward the image. The gap after G1, D10, increases by the same amount that the L23-to-L24 gap, D15, decreases. Their sum remains constant, so L24 and the other zoom groups retain their infinity-focus axial stations.

| Zoom station | D10 infinity → close | D15 infinity → close | Subgroup shift toward image | Computed absolute magnification at 0.30 m |
|---|---:|---:|---:|---:|
| 11.25 mm | 12.448 → 13.483192 mm | 2.484 → 1.448808 mm | 1.035192 mm | 0.060408 |
| 14.00 mm | 7.614 → 8.660369 mm | 2.484 → 1.437631 mm | 1.046369 mm | 0.075797 |
| 17.70 mm | 3.125 → 4.220533 mm | 2.484 → 1.388467 mm | 1.095533 mm | 0.097907 |

The object distance is 0.30 m measured from the fixed image plane, matching the production minimum-focus convention used in the reconstruction. The tele result rounds to the marketed 0.10× maximum magnification. This agreement is a cross-check, not proof that the production lens uses precisely the modeled internal motion.

No motion of L24, G3, G4, or the image plane is introduced during focusing. Ricoh confirms the production lens’s Focus Clamp mechanism, but does not identify the moving optical subgroup or establish that it is the patent’s L21/L22/L23 subgroup. The modeled mechanism must therefore remain explicitly described as constrained and inferred.

## Aspherical Surfaces

The patent uses the standard rotationally symmetric conic-plus-even-polynomial equation:

$$
z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2 h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12},
$$

where $c=1/R$. The tabulated quantity is already the standard conic constant $K$; no conversion from an alternate κ convention is required. Sag and radial height are expressed in millimeters, so $A_p$ has units of mm$^{1-p}$.

| Surface | Element | K | A4 | A6 | A8 | A10 | A12 |
|---|---|---:|---:|---:|---:|---:|---:|
| 1A | L11 front | −11.636 | +4.186E−05 | −1.186E−07 | +3.434E−10 | −5.617E−13 | +4.229E−16 |
| 5A | L12r outer | +0.055 | +7.196E−05 | −3.796E−07 | +1.912E−09 | −8.408E−12 | 0 |
| 27A | L44 front | 0 | −9.870E−05 | −3.859E−07 | +1.285E−09 | +6.790E−12 | +2.725E−14 |
| 28A | L44 rear | +2.202 | −6.747E−05 | −3.336E−07 | +2.692E−09 | −5.199E−12 | +4.675E−14 |

Surface 1A shapes the first negative meniscus, where large ray heights make higher-order correction especially influential. Surface 5A is the exposed face of the patent-defined synthetic-resin hybrid and is the only asphere whose manufacturing form is explicitly identified by the patent. Surfaces 27A and 28A form a double-aspherical final meniscus, allowing the last element to alter the rear wavefront with little standalone paraxial power.

No scale factor is applied, so the coefficient table is transcribed without dimensional transformation. Had a uniform scale $s$ been used, the required transformation would have been $A_{p,\mathrm{scaled}}=A_{p,\mathrm{patent}}/s^{p-1}$ with $K$ unchanged; that operation is not part of this model.

The patent does not publish clear semi-diameters or asphere evaluation heights. The data file’s semi-diameters are verified modeling apertures rather than source values, so no patent-attributed aspherical departure is quoted. The source also does not identify whether the glass aspheres on L11 and L44 are molded or polished.

## Chromatic Correction Strategy

The patent emphasizes power balance and cemented components rather than naming a formal apochromatic objective. The prescription nevertheless shows a deliberate distribution of dispersion classes.

G1 uses moderate-dispersion and high-index materials to create a powerful negative front assembly. Its positive L14/L15 cemented pair has a net EFL of +88.057471 mm and is explicitly described by the patent as a corrective component within the negative first group. The separate negative L12 hybrid has a net EFL of −37.985827 mm. Conditions (4) and (5) attempt to regulate the relationship between these two bonded components.

G2 places the νd = 81.6 L24 behind the focusing subgroup. G4 then combines νd = 95.0 at L41 with νd = 23.8 at L42 and νd = 81.6 at L43. The L42/L43 pair has strong opposing constituent powers but only a weak net negative power, permitting dispersion balancing with limited disturbance to G4’s positive focal power.

These statements describe index/Abbe structure and computed powers only. They do not establish secondary-spectrum correction, anomalous partial dispersion, or APO performance.

## Conditional Expressions

The patent gives five evaluated conditions for Numerical Example 1. Conditions (1)–(3) use the four functional group powers; conditions (4) and (5) use the positive L14/L15 cemented set and the negative L12 hybrid.

| Condition | Prescription-derived value | Patent Table 29 | Assessment |
|---|---:|---:|---|
| $f_2/f_1$ | −2.604581 | −2.60 | Agrees at table precision |
| $f_3/f_1$ | +4.022859 | +4.02 | Agrees at table precision |
| $f_4/f_3$ | −0.591663 | −0.59 | Agrees at table precision |
| $R_{cP}/f_{cP}$ | −0.156614 | −0.143 | Does not agree |
| $f_{cN}/f_{cP}$ | −0.431375 | −0.388 | Does not agree |

For the prescription-derived calculation, $R_{cP}$ is the −13.791 mm bonded radius between L14 and L15, $f_{cP}$ is the +88.057471 mm net focal length of that cemented set, and $f_{cN}$ is the −37.985827 mm net focal length of the L12 hybrid. A zero-thickness interface-power calculation also fails to reproduce the two Table 29 values.

The discrepancy is therefore retained as an unresolved source contradiction. The data file does not alter the prescription to force agreement with Table 29, and the analysis does not treat the table values as independently verified design quantities.

## Verification Summary

All quantitative optical results below were recomputed from the final TypeScript arrays by sequential reduced-angle tracing and an independent ABCD matrix product.

| Infinity zoom state | Computed EFL | Patent EFL | Computed BFD | Patent BFD | Total track |
|---|---:|---:|---:|---:|---:|
| Wide | 11.250415 mm | 11.25 mm | 38.140406 mm | 38.14 mm | 134.421 mm |
| Intermediate | 13.999979 mm | 14.00 mm | 42.127032 mm | 42.13 mm | 135.554 mm |
| Tele | 17.697394 mm | 17.70 mm | 48.877342 mm | 48.88 mm | 139.128 mm |

The matrix determinants agree with unity to numerical precision, and the independent sequential and ABCD assemblies differ by no more than 2.85×10⁻14. The total Petzval sum, evaluated surface by surface as $\phi/(n n')$, is +0.006300911897 mm⁻¹. Under the convention $R_\mathrm{image}=-1/P$, the corresponding paraxial image-surface radius is −158.707187 mm.

The aperture stop position is published, but its diameter is not. The model uses `nominalFno = 2.8`, allowing the runtime to derive a zoom-dependent physical stop requirement. The maximum independently traced requirement is 9.090387 mm semi-diameter at tele infinity; the authored 9.2 mm stop semi-diameter is a small model allowance and is not a patent dimension.

The patent also omits clear semi-diameters. The final values were inferred from exact Snell/asphere traces and then
tested at all three zoom stations at infinity and reconstructed close focus. Figure 1 was used as a relative silhouette:
G2 surfaces 11–17 were tightened from 10.5–11.0 mm to 9.5–9.6 mm, G3 from 10.5 mm to 9.5 mm, and the spherical part
of G4 from 11.5–11.7 mm to 10.8–11.0 mm. The limiting surface 10, the stop, and all four aspherical evaluation
heights were retained. The smallest representative-ray rim clearance therefore remains 0.109613 mm; the minimum
element edge thickness is 0.287588 mm at the L12 resin layer; the maximum actual rim slope is 58.163° at surface 1A;
and the largest positive cross-gap intrusion is 77.99% of the permitted 90% band. These figures validate the modeled
geometry but do not convert the inferred apertures into source facts.

The complete-system prescription, cemented-set powers, group powers, focus reconstruction, pupil calculations, Petzval sum, and conditions were independently verified. The standalone focal lengths in the final data file are isolated-in-air constituent powers; they must not be substituted for cemented net powers when interpreting the patent’s conditional expressions.

## Sources

1. [US 2018/0164556 A1, “Zooming Optical System”](https://patents.google.com/patent/US20180164556A1/en), especially ¶0054–¶0077, ¶0122–¶0131, Tables 1–4 and Table 29.
2. [Ricoh Imaging, launch announcement for the HD PENTAX-DA★11-18mmF2.8ED DC AW, 31 January 2019](https://news.ricoh-imaging.co.jp/rim_info2/2019/20190131_019918.html).
3. [Ricoh Imaging, US product specifications](https://us.ricoh-imaging.com/product/hd-pentax-da%E2%98%8511-18mmf2-8ed-dc-aw/).
4. [Ricoh Imaging, Star Lens product overview](https://www.ricoh-imaging.co.jp/english/products/star_lens/special/sp_da11-18/).
5. [OHARA optical-glass catalogs](https://www.ohara-inc.co.jp/en/product/catalog/).
6. [HIKARI optical-glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/).
7. [SCHOTT optical-glass data](https://www.schott.com/en-us/products/optical-glass-p1000267).
8. [HOYA optical-glass data](https://www.hoya-opticalworld.com/).
9. [SUMITA optical-glass data](https://www.sumita-opt.co.jp/en/optical-glass/).
10. [CDGM optical-glass data](https://www.cdgmgd.com/).
