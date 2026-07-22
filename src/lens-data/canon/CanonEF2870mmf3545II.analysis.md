## Patent Reference and Design Identification

**Patent:** JP H01-189622 A  
**Application number:** JP63015409A (特願昭63-15409)  
**Filed / priority:** 26 January 1988  
**Published:** 28 July 1989  
**Inventor:** Sadatoshi Takahashi  
**Applicant:** Canon Inc.  
**Title:** Zoom Lens (ズームレンズ)  
**Embodiment analyzed:** Numerical Example 1  
**Data subtitle:** JP H01-189622 A — Numerical Example 1 (correlated and repaired patent prescription)  
**Production correlation:** CANON EF 28-70mm f/3.5-4.5 II; selected, author-established correlation

The prescription is Numerical Example 1 of JP H01-189622 A. Canon does not explicitly identify this patent as the
production prescription, so the mapping is a selected production correlation rather than a manufacturer-confirmed
disclosure; it is not manufacturer-confirmed. The correlation is nevertheless supported by several convergent facts. [1, pp. 190-193; 2]

1. **Construction.** The patent example contains ten elements. The final model has ten physical elements and nine air-spaced groups because L9 and L10 form one cemented doublet. Canon specifies ten elements in nine groups for the production lens.
2. **Focal range.** The corrected patent prescription computes 29.083448799 mm at wide and 67.894369753 mm at tele, while the product is marketed as 28-70 mm. The unequal endpoint ratios show that the patent prescription was not uniformly rescaled to the rounded retail designation.
3. **Aperture.** The patent publishes f/3.6 at wide and f/4.6 at tele. Canon markets the lens as f/3.5-4.5. These are compatible rounded consumer values, but they are not treated as identical numerical specifications.
4. **Asphere.** Numerical Example 1 has one aspherical surface, patent R4, stored as surface 4A on the image-side face of the second element. Canon describes one aspherical optical element in the production lens.
5. **Zoom architecture.** The patent uses three kinematic groups: negative G1, positive G2, and a fixed weakly positive G3. Canon describes a unique three-group zoom system and states that the external length does not change during zooming.
6. **Format.** The patent's published focal lengths and full fields imply image heights of 21.678 mm at wide and 21.668 mm at tele, corresponding to an approximately 43.34 mm image-circle diagonal. This agrees with the Canon EF 135-format application represented by `lensMounts: ["canon-ef"]` and `imageFormat: "135-full-frame"`.
7. **Focus and close range.** The patent states that G1 performs focusing. [1, p. 190] Canon specifies a 0.39 m minimum focusing distance and 0.22× maximum magnification. The patent does not publish finite-focus spacings; the data file therefore uses a disclosed constrained reconstruction rather than claiming a published production cam law.
8. **Timing.** The application was filed in January 1988 and the production lens was introduced in June 1988, placing the design and product in the same development period.

The marketed zoom ratio is 2.5×. The corrected prescription's exact design ratio is 2.334467629×. No
image-stabilization group is present in the patent or data model. [2; 3]

### Modeled source repair

Numerical Example 1 is internally inconsistent as printed. The publication and the later Japanese grant both give R17
= -11.61 mm and R21 = -141.79 mm. Direct paraxial tracing of those values gives system focal lengths of only
12.020667, 13.672199, and 13.756833 mm across the three states; it also gives G2 a focal length of 20.140491 mm rather
than the patent's stated 36.27 mm. The discrepancy is far beyond table rounding. [1, pp. 192-193; 3]

The validated model therefore uses R17 = -36.74 mm and R21 = -37.76 mm. Those values are the best hundredth-millimeter
equal-weight fit to the patent's three focal-length targets and published G2 focal length. They are an author modeling
repair, not an official erratum and not a uniquely proven reconstruction of the original drafting values. With the
repair, the three computed EFL residuals are 0.006551, 0.001900, and 0.004370 mm, and the BFD span is only 0.007108
mm.

The patent also lists an optically neutral moving flare-cutter plane as R18. The data sequence omits that inactive
plane and preserves its axial effect by combining D18 with the preceding air gap: D17 + D18 = 2.675, 19.743, and
34.350 mm at wide, middle, and tele. The physical flare cutter is not claimed to be absent from the production lens;
it is excluded only from the refractive prescription. [1, pp. 190, 192; 3]

No dimensional scaling is applied. The scale factor is s = 1.0, so every radius, thickness, semi-diameter, and
image-plane coordinate remains in the patent's millimeter scale. The aspheric transformation is therefore A_p,scaled =
A_p,patent / s^(p-1) = A_p,patent, and the standard conic constant K is unchanged.

## Optical Architecture

The model is a three-kinematic-group negative-positive-weak-positive zoom. [1, pp. 190, 192; 3] It is not assigned to a classic named
family solely from its outline. The three functional groups contain nine air-spaced optical groups in total because
the fixed rear group is a cemented doublet.

| Functional group | Elements | Verified focal length | Kinematic role |
|---|---|---:|---|
| G1 | L1-L3 | -45.001001 mm | Negative front group; zoom compensator and focusing group |
| G2 | L4-L8, with STO between L4 and L5 | +36.262519 mm | Positive variator; moves monotonically objectward from wide to tele |
| G3 | L9-L10 cemented doublet | +719.059284 mm | Fixed, very weak positive rear corrector |

G1 contains two negative elements followed by one positive element. Its net negative power supplies the wide-angle
front-group behavior. G2 contains the aperture stop and most of the system's positive power. Its pre-stop element L4
has f = +51.970335 mm, while the post-stop L5-L8 assembly has a verified net focal length of +135.174446 mm. G3 is
nearly afocal compared with the complete lens; its computed positive focal length of approximately 719 mm indicates
that it functions mainly as a fixed rear correction assembly rather than as a principal zoom-power group. That
interpretation follows from its measured power and position, not from a named design-family assumption.

### Zoom motion

Coordinates below are measured relative to the fixed front vertex of G3, with positive motion toward the image.

| State | G1 motion from wide | G2 motion from wide | G3 motion |
|---|---:|---:|---:|
| 29.09 mm | 0.000 mm | 0.000 mm | 0.000 mm |
| 50.00 mm | +6.111 mm imageward | -17.068 mm objectward | 0.000 mm |
| 67.89 mm | 0.000 mm | -31.675 mm objectward | 0.000 mm |

G2 moves monotonically objectward by 31.675 mm over the full zoom. G1 follows a reversing compensator locus: it moves
6.111 mm imageward at the middle state and returns to its wide-end station at tele. G3 remains fixed. The aperture
stop lies within G2 between L4 and L5 and therefore follows G2's zoom motion. The patent's flare cutter also moves,
but it is omitted from the optical surface list because it is refractively inactive. [1, pp. 190, 192]

The fixed vertex-to-vertex thicknesses are 17.700 mm for G1, 23.200 mm for G2, and 4.100 mm for G3. At infinity, the
modeled R1-to-image-plane tracks are 117.880823 mm, 111.767320 mm, and 117.873715 mm. The middle position is shorter
internally because of the reversing G1 locus; Canon's statement that the lens maintains constant external length
concerns the mechanical barrel, not a constant internal optical track.

### Cardinal behavior

The rear group and image plane remain effectively fixed: BFD is 37.723823 mm at wide, 37.721320 mm at middle, and
37.716715 mm at tele. The first principal plane lies 38.268099, 35.230647, and 33.610064 mm imageward of R1. The
second principal plane shifts from 8.640375 mm imageward of the final vertex at wide to 12.276780 mm objectward at
middle and 30.177655 mm objectward at tele. This principal-plane migration is a central part of the focal-length
change.

The construction is not telephoto at any tabulated position: TL/EFL is 4.053193, 2.235431, and 1.736134. BFD/EFL is
1.297089 at wide, 0.754455 at middle, and 0.555521 at tele. BFD therefore exceeds EFL only at the wide endpoint. The
term “retrofocus” is not applied to the zoom as a whole; the BFD>EFL condition is endpoint-specific.

The stop location is patent-published, but its clear diameter is not. The runtime aperture model follows the marketed
f/3.5–4.5 specification rather than substituting the patent’s f/3.6–4.6 design endpoints into `nominalFno`. The middle
control point is an explicit f/4.0 interpolation. Exact tracing gives modeled physical stop diameters of 17.037350 mm
at wide, 19.818699 mm at middle, and 21.545302 mm at tele. The associated entrance-pupil diameters are 8.309557,
12.499525, and 15.087638 mm. These stop diameters are model values, not patent-published clear apertures.

## Element-by-Element Analysis

The standalone focal lengths below are thick-lens values for each physical element evaluated in air. They describe the
isolated component and must not be confused with its in-situ contribution inside an air-spaced or cemented assembly.

### L1 — Negative Meniscus (convex to object)

**nd = 1.83400, νd = 37.2. Glass: 834372 — dense lanthanum flint (catalog vendor unresolved). Standalone f = -38.323 mm.**

L1 is the strongest isolated negative element in G1. The patent's conditions on N11, R1/FT, and R2/FT explicitly
constrain its high index and two front radii. The patent explains these conditions in terms of balancing first-group
negative power, wide-end distortion, and the rear clearance required by the camera system. In the complete group, L1
works with the weaker negative L2 and positive L3 to produce G1's verified -45.001001 mm focal length.

The element's class name does not establish an actual historical melt supplier. Its νd below 50 places it in flint
territory despite the lanthanum family description. [1, p. 191; 3]

### L2 — Biconcave Negative (1× Asph)

**nd = 1.58313, νd = 59.4. Glass: 583594 — barium/dense crown (catalog vendor unresolved). Standalone f = -65.238 mm.**

L2 carries the sole aspherical surface, 4A, on its image-side face. The patent separately constrains N12 and the R3/R4
region of this element. It places the asphere where the off-axis bundles are large and states that this location
improves distortion correction through the zoom range; it also associates the comparatively low index of this element
with reduced sensitivity to asphere manufacturing error and states that the surface reduces spherical-aberration
generation. [1, p. 192]

The printed condition (7) is inconsistent with both numerical examples when read as R3/FT. The modeled interpretation
FT/R3 satisfies the stated interval and is treated as an apparent expression-order typo. This repair concerns the
conditional expression, not the stored R3 value.

### L3 — Positive Meniscus (convex to object)

**nd = 1.80518, νd = 25.4. Glass: 805254 — dense flint (catalog vendor unresolved). Standalone f = +57.125 mm.**

L3 is the positive rear member of G1. Its positive power offsets the two preceding negative elements without changing
the first group's net sign. The patent constrains R5/FT and describes the first group as a negative-negative-positive
sequence. In the modeled zoom, L3 moves with L1 and L2 as a rigid group during both compensation and focus. [1, pp. 190, 192]

The very low νd supports strong dispersion relative to the preceding crown-class L2, but the data contain no line
indices or partial-dispersion value. No apochromatic or anomalous-dispersion claim is made.

### L4 — Biconvex Positive

**nd = 1.65160, νd = 58.6. Glass: 652585 — lanthanum crown (catalog vendor unresolved). Standalone f = +51.970 mm.**

L4 is the positive element before the aperture stop and forms the front portion of G2. The patent describes the second
group as the principal positive group and uses its movement to vary focal length. L4's location before the moving stop
makes it the principal pre-stop collector within that group. Its isolated focal length is also the verified focal
length of the pre-stop L4 subassembly. [1, pp. 190, 192; 3]

The role description is based on its measured power and stop-relative position. The lanthanum-crown class name alone
is not used to infer a specific aberration correction mechanism.

### L5 — Positive Meniscus (convex to object)

**nd = 1.48749, νd = 70.2. Glass: 487702 — low-index fluor/light crown (catalog vendor unresolved). Standalone f = +93.013 mm.**

L5 is the first post-stop positive element of G2. Its relatively weak standalone power and high νd make it a
lower-dispersion positive member within the alternating-power rear portion of the variator. The patent's second-group
description supports the sequence, while the precise correction role is an interpretation from the validated power
distribution and placement.

“Fluor/light crown” is a glass-class description from the stored six-digit coordinate. It does not mean that the
element is fluorite, an ED glass, or a particular modern vendor product.

### L6 — Positive Meniscus (convex to object)

**nd = 1.48749, νd = 70.2. Glass: 487702 — low-index fluor/light crown (catalog vendor unresolved). Standalone f = +60.372 mm.**

L6 repeats the L5 index/dispersion coordinate but has stronger positive power. Together, L5 and L6 build positive
power after the stop before the strong negative L7. Their use of the same generic glass class is directly present in
the patent table; no separate supplier identity is inferred. [1, p. 192]

L5-L8 as a complete post-stop assembly has a net focal length of +135.174446 mm in situ. That assembly value is not
obtained by simply adding the four standalone thin-lens powers, because the elements have finite thicknesses and air
separations.

### L7 — Biconcave Negative

**nd = 1.84666, νd = 23.9. Glass: 847239 — very dense high-dispersion flint (catalog vendor unresolved). Standalone f = -19.179 mm.**

L7 is the strongest isolated element in G2 and provides the major negative correction inside the otherwise positive
group. It lies between the two lower-dispersion positive menisci and the final positive L8. The sequence and computed
power show that L7 moderates the accumulated positive power of the group; the patent does not provide enough spectral
data to assign a more specific secondary-spectrum role.

Its high refractive index and low νd are source coordinates, not evidence by themselves of an anomalous
partial-dispersion glass.

### L8 — Biconvex Positive

**nd = 1.75520, νd = 27.5. Glass: 755275 — dense flint (catalog vendor unresolved). Standalone f = +38.808 mm.**

L8 completes G2 and is followed by the variable gap to the flare cutter and fixed rear group. The validated numerical
prescription makes L8 biconvex. This shape follows the actual radius signs in Numerical Example 1 and the repaired R17
value; generalized prose descriptions of the group do not override the numerical table. [1, p. 192]

L8 restores positive power after L7 and helps leave the entire five-element G2 at +36.262519 mm. Its low νd again
indicates high dispersion, but no partial-dispersion or APO claim is supported.

### L9 — Negative Meniscus (convex to image) — cemented D1 front component

**nd = 1.83400, νd = 37.2. Glass: 834372 — dense lanthanum flint (catalog vendor unresolved). Standalone f = -152.250 mm.**

L9 is the negative front component of the fixed rear cemented doublet. Its rear surface R20 is not an exit to air; it
is the shared refracting interface into L10. The standalone value above describes L9 in air and therefore does not
represent its actual in-situ power inside D1.

### L10 — Positive Meniscus (convex to image) — cemented D1 rear component

**nd = 1.60311, νd = 60.7. Glass: 603607 — dense crown (catalog vendor unresolved). Standalone f = +130.398 mm.**

L10 receives the ray directly from L9 across the cemented R20 interface and exits to air at surface 21. Its isolated
positive focal length is slightly stronger than the magnitude of L9's isolated negative focal length, but the cemented
assembly cannot be analyzed as two independent air lenses.

The complete L9-L10 doublet has a verified in-situ focal length of +719.059284 mm. The large magnitude shows that the
pair is only weakly positive as an assembly. The difference in νd between the two components makes “achromatizing
pair” a defensible restrained description, but the absence of nC, nF, ng, dPgF, or an asserted Sellmeier identity
prevents a stronger chromatic-performance claim.

## Glass Identification and Selection

The patent publishes nd and νd but no supplier names, line indices, partial-dispersion values, or Sellmeier
coefficients. The data file therefore uses generic six-digit coordinate classes. These codes are
manufacturer-independent shorthand derived from rounded nd and νd; they are not catalog product names.

| Stored glass annotation | Used in | Stored nd / νd | Nearest modern catalog coordinates checked in the audit |
|---|---|---:|---|
| 834372 — dense lanthanum flint (catalog vendor unresolved) | L1, L9 | 1.83400 / 37.2 | OHARA S-LAH60: Δnd 0.000000, Δνd -0.04; HIKARI J-LASF010: Δnd 0.000000, Δνd -0.02 |
| 583594 — barium/dense crown (catalog vendor unresolved) | L2 | 1.58313 / 59.4 | OHARA S-BAL42: Δnd 0.000000, Δνd -0.02; HIKARI J-SK12: Δnd 0.000000, Δνd +0.02 |
| 805254 — dense flint (catalog vendor unresolved) | L3 | 1.80518 / 25.4 | OHARA S-TIH6: Δnd 0.000000, Δνd +0.02; Schott SF6: Δnd 0.000000, Δνd +0.03 |
| 652585 — lanthanum crown (catalog vendor unresolved) | L4 | 1.65160 / 58.6 | HIKARI J-LAK7R: Δnd 0.000000, Δνd +0.02; HIKARI J-LAK7: Δnd 0.000000, Δνd -0.03 |
| 487702 — low-index fluor/light crown (catalog vendor unresolved) | L5, L6 | 1.48749 / 70.2 | OHARA S-FSL5: Δnd 0.000000, Δνd +0.03 |
| 847239 — very dense high-dispersion flint (catalog vendor unresolved) | L7 | 1.84666 / 23.9 | OHARA S-NPH53: Δnd 0.000000, Δνd -0.02; OHARA S-TIH53WN: Δnd 0.000000, Δνd -0.04 |
| 755275 — dense flint (catalog vendor unresolved) | L8 | 1.75520 / 27.5 | OHARA S-TIH4: Δnd 0.000000, Δνd +0.01 |
| 603607 — dense crown (catalog vendor unresolved) | L10 | 1.60311 / 60.7 | HOYA BACD14: Δnd 0.000000, Δνd 0.00; HIKARI J-SK14: Δnd 0.000000, Δνd -0.01 |

The catalog entries in the final column are coordinate equivalents only. Several vendors provide equally plausible
modern matches, and modern eco-glass names cannot establish the actual 1988 melt or supplier. The stored generic
labels are therefore more defensible than assigning OHARA, HIKARI, Schott, or HOYA identities.

The data contain no `nC`, `nF`, `ng`, or `dPgF` fields. Any chromatic interpretation is consequently limited to
ordinary nd/νd relationships. The lens may be described as using alternating crown- and flint-class materials and an
achromatizing rear doublet, but not as apochromatic or as using anomalous partial-dispersion glass.

## Focus Mechanism

The patent states that G1 performs focusing. [1, p. 190] The data file implements this as front-group focus: G1 translates as a
rigid unit, G2 and G3 remain at their selected zoom stations, and only D6 changes. Canon specifies a 0.39 m closest
focusing distance and 0.22× maximum magnification, but the patent provides no finite-focus spacing table, object
distance, or magnification.

The focus model is therefore a **constrained reconstruction**, not a patent-published state. At each zoom position, D6
was solved so that the assumed object-to-image-plane distance is 390 mm. The calculation treats Canon's rounded MFD as
image-plane referenced. Because the cited Canon page does not state the reference plane, this is a disclosed modeling
assumption rather than proof of the production cam geometry.

| Zoom state | D6 at infinity | D6 at modeled close focus | G1 objectward travel | Modeled magnification |
|---:|---:|---:|---:|---:|
| 29.09 mm | 32.482000 mm | 39.011826 mm | 6.529826 mm | -0.093778× |
| 50.00 mm | 9.303000 mm | 15.703985 mm | 6.400985 mm | -0.158036× |
| 67.89 mm | 0.807000 mm | 7.336673 mm | 6.529673 mm | -0.218918× |

The tele-state magnification magnitude differs from Canon's rounded 0.22× by 0.001082×. That agreement supports the
reconstruction as a first-order representation, but it does not establish the exact production internal spacing.

The one-gap reconstruction exhibits paraxial focal-length reduction at close focus: 26.107185 mm, 42.105043 mm, and
54.135344 mm at the three states. These are model results, not manufacturer-published effective focal lengths. The
physical stop remains fixed within G2 at each zoom station, so the reconstructed close-state effective f-numbers also
differ from the infinity nominal values.

The official product page does not identify a specific AF motor technology, and the product name has no USM or STM
designation. No motor type is assigned in the data or analysis. [2]

## Aspherical Surfaces

Surface 4A, the image-side surface of L2, is the only asphere. [1, pp. 192-193] The patent writes the sag as

$$
X(H)=\frac{(1/R)H^2}{1+\sqrt{1-(H/R)^2}}+BH^4+CH^6+DH^8.
$$

The base term is spherical. In the standard conic-polynomial convention used by the data file, the stored conic
constant is therefore K = 0. The polynomial mapping is A4 = B, A6 = C, and A8 = D.

| Coefficient | Stored value |
|---|---:|
| K | 0 |
| A4 | -3.886 × 10^-6 mm^-3 |
| A6 | -1.883 × 10^-9 mm^-5 |
| A8 | -3.390 × 10^-11 mm^-7 |
| A10, A12, A14 | 0 |

No scale transformation is required because s = 1.0. The coefficients and K are copied at the patent scale.

The patent does not publish a clear aperture. At the final data file's inferred semi-diameter of 14.600 mm,
independent code gives a spherical-base sag of 2.258003 mm and an aspheric sag of 1.993209 mm. The signed departure is
-0.264794 mm (-264.794 µm): the stored asphere lies objectward of, and is flatter at the rim than, the positive-radius
spherical base. The verified rim-slope angle is 12.554°.

The departure value is valid only at the stored inferred semi-diameter. It is not a patent-published edge departure.
Canon identifies an aspherical optical element but does not state on the cited product page whether it is polished
glass, molded glass, or a composite resin construction; no manufacturing method is inferred from the coefficients.

## Conditional Expressions

The patent defines FT as the tele-end focal length and gives nine conditions for the first two groups and the
first-group surface shapes. Values below were recomputed from the final data arrays.

| Condition | Expression | Computed value | Patent interval | Result |
|---:|---|---:|---:|---|
| 1 | abs(f1/FT) | 0.662809 | 0.60 < x < 0.72 | Pass |
| 2 | f2/FT | 0.534102 | 0.48 < x < 0.59 | Pass |
| 3 | N11 | 1.834000 | 1.70 < x | Pass |
| 4 | N12 | 1.583130 | 1.50 < x < 1.65 | Pass |
| 5 | R1/FT | 0.715965 | 0.65 < x < 0.83 | Pass |
| 6 | R2/FT | 0.278963 | 0.25 < x < 0.31 | Pass |
| 7, printed | R3/FT | -2.672387 | -0.59 < x < 0 | Fail |
| 7, inferred repair | FT/R3 | -0.374197 | -0.59 < x < 0 | Pass |
| 8 | R4/FT | 0.711841 | 0.64 < x < 0.80 | Pass |
| 9 | R5/FT | 0.525670 | 0.47 < x < 0.58 | Pass |

The printed form of condition (7) fails by a large margin. The patent's explanatory text and both numerical examples
satisfy the stated interval when the ratio is inverted. The analysis therefore records FT/R3 as an inferred typography
repair while preserving the printed expression as a source fact. [1, pp. 189-191; 3]

## Verification Summary

| State | Computed EFL | Patent focal value | BFD | R1-to-image track | Runtime nominal f-number |
|---:|---:|---:|---:|---:|---:|
| Wide | 29.083449 mm | 29.09 mm | 37.723823 mm | 117.880823 mm | f/3.5 marketed |
| Middle | 49.998100 mm | 50.0 mm | 37.721320 mm | 111.767320 mm | f/4.0, inferred |
| Tele | 67.894370 mm | 67.89 mm | 37.716715 mm | 117.873715 mm | f/4.5 marketed |

The patent’s design aperture remains f/3.6 at wide and f/4.6 at tele. The runtime `nominalFno` values instead follow
the marketed f/3.5–4.5 specification, as required by the current data policy. The f/4.0 middle control point is an
author interpolation because neither the patent nor Canon’s product record publishes an intermediate maximum aperture.

The surface-by-surface Petzval sum is +2.293345612 × 10^-3 mm^-1. Under the audit's sign convention this corresponds
to a Petzval radius of -436.044177 mm. The value was computed as Σ[(n' - n)/(n n' R)] over the actual surfaces, not
from element-level thin-lens powers.

The inferred semi-diameters pass the modeled geometry checks over every zoom and reconstructed focus state. Minimum
element edge thickness is 1.315307 mm at L3, maximum actual rim-slope angle is 49.958218°, maximum shared-band
cross-gap intrusion is 0.894554 of the air gap, and the equivalent hidden renderer trim is zero. The front clear
diameter is 32.000 mm, within the production lens's 52 mm filter-thread limit.

The final data and analysis agree on the lens identity, patent attribution, Numerical Example 1, ten elements, nine
air-spaced groups, element labels and shapes, generic glass annotations, one asphere at 4A, the repaired R17/R21
model, the omitted inactive R18 plane, three zoom positions, constrained D6 focus model, no production scaling, Canon
EF mount, 135 format, 0.39 m marketed MFD, and the distinct marketing and design focal/aperture values.

## Sources

1. Sadatoshi Takahashi, “Zoom Lens,” JP H01-189622 A, filed 26 January 1988, published 28 July 1989, Numerical Example 1, especially publication pp. 189-195, the prescription on p. 192, coefficients on p. 193, and Figs. 1 and 3.
2. Canon Inc., [Canon Camera Museum: EF28-70mm f/3.5-4.5 II](https://global.canon/en/c-museum/product/ef273.html) — introduction date, construction, diaphragm count, minimum aperture, MFD, maximum magnification, filter diameter, three-group zoom description, aspherical element, and constant external length during zoom.
3. `CanonEF2870mmf3545II.audit.md` — independent paraxial verification, patent-table repair, group and element powers, Petzval calculation, focus reconstruction, geometry checks, conditional expressions, and glass-candidate residuals.
4. Current public optical-glass catalogs consulted in the audit: OHARA, HIKARI, Schott, and HOYA. The catalog entries are used only as modern coordinate equivalents; no supplier identity is assigned to the 1988 prescription.
