# CANON EF 28-200mm f/3.5-5.6 USM

## Patent Reference and Design Identification

**Patent:** JP 2001-350095 A  
**Filed:** June 5, 2000  
**Published:** December 21, 2001  
**Inventor:** Makoto Mitsusaka  
**Applicant:** Canon Inc.  
**Title:** Zoom lens and optical device using the same  

The prescription is Numerical Example 1 of JP 2001-350095 A (¶0054; PDF p. 6). The selected production correlation is the Canon EF
28-200mm f/3.5-5.6 USM. This identification is fixed for the present analysis, but it is not represented as an explicit
manufacturer statement that the commercial lens uses this exact patent example.

The correlation rests on several independent points of agreement:

1. Canon marketed the EF28-200mm f/3.5-5.6 USM in September 2000, three months after the patent filing date.
2. Canon specifies 16 elements in 12 groups, a five-group zoom in which all five groups move, two aspherical elements,
   second-group inner focusing, a 0.45 m minimum focus distance at every focal length, and 0.28× maximum magnification at
   200 mm.
3. Numerical Example 1 is a five-group positive-negative-positive-negative-positive zoom with design focal lengths of
   28.92, 80.00, and 193.14 mm and modeled maximum apertures of f/3.63, f/5.06, and f/5.88.
4. The example contains two aspherical surfaces and places the focusing function in the second group, matching the
   production description.
5. The prescription is used at native scale. The rounded commercial designation, 28-200mm f/3.5-5.6, is kept separate
   from the exact modeled range and f-number states.

The physical product count is 16 glass substrates in 12 air-separated groups. The data model contains 17 material
entries because the 0.05 mm layer at the front of the second group is represented separately from its glass substrate.
That layer is interpreted as a bonded replica or hybrid aspheric component. The interpretation follows the layer's
thickness, index, and placement; the patent does not explicitly name its manufacturing process.

The Example 1 table omits visible minus signs at radii 12, 18, 23, and 26; those four signs are restored in the model.
The negative signs printed at radii 20, 28, and 29 are retained. This sign treatment agrees with the patent sections,
reproduces the stated focal lengths, and reproduces all five group-power ratios in Patent Table 1. It is a source
correction rather than a change of radius-sign convention.

All index-dependent calculations below use the retained source numbers with an explicitly qualified approximate d-line tracing convention. The original does not identify the material spectral reference; see the glass section.

## Optical Architecture

The lens is a five-group zoom with the power sequence positive-negative-positive-negative-positive (¶0010). The aperture stop is
located between the second and third groups at source surface 16. The patent's numerical example therefore has the
following functional arrangement:

| Group | Surfaces | Computed group focal length | Principal function |
|---|---:|---:|---|
| G1 | 1-5 | +90.817140 mm | Positive front collector and wide-angle entrance group |
| G2 | 6A-15 | -14.471292 mm | Strong negative variator and inner-focus group |
| G3 | 17-21 | +24.601852 mm | Positive post-stop relay group |
| G4 | 22-24 | -41.255033 mm | Negative compensating group |
| G5 | 25-30 | +48.870271 mm | Positive rear relay and image-forming group |

These are focal lengths of the complete functional-group matrices. They are not sums of the standalone element powers
listed later, and they do not describe the contribution of an element while embedded in the complete zoom.

G1 combines a weakly positive cemented front pair with a separate positive meniscus. Its large clear apertures collect
the wide-angle field and establish the front principal-ray geometry. G2 is the dominant negative group. It contains the
front hybrid asphere, two additional negative elements, a strong positive element, and a cemented negative pair. This
concentrates the zoom and focus leverage in a relatively compact moving group.

The stop moves with G3. G3 begins with a positive singlet and ends in a weakly positive cemented doublet, producing a
compact positive relay immediately behind the stop. G4 is a cemented negative doublet. G5 begins with the second
aspherical element, adds a weak positive singlet, and ends with a negative meniscus that moderates the rear-group power.

From wide to tele, D5 increases, D15 decreases, D21 increases, and D24 decreases (¶0018). With the image plane held fixed, all
five groups move toward the object across the three published stations. G3, the stop, and G5 preserve their integral
motion as described in ¶0019: the G3-to-G5 front-surface separation remains 23.790 mm, while D21 + D24 remains 9.960 mm at all three stations.
No group reverses direction between the published wide, middle, and tele positions.

The system changes first-order classification across the zoom range. At the wide state the computed back focal distance
of 38.245833 mm exceeds the 28.896161 mm EFL, satisfying the project's retrofocus criterion. At the tele state the total
track to the image plane is 181.472808 mm and the EFL is 192.911008 mm, giving TL/EFL = 0.940707 and satisfying the
project's telephoto criterion. The zoom as a whole should therefore not be described unqualifiedly as either a
retrofocus or telephoto design.

## Element-by-Element Analysis

The focal length stated for each material entry is its independently computed standalone focal length in air. It does
not equal the element's in-situ contribution inside a cemented assembly or moving zoom group.

### C1: L1 and L2 - Cemented Front Pair

**L1 - Negative Meniscus.** n (source) = 1.846660, ν (source) = 23.9. Glass: Unmatched (source n=1.84666, ν=23.9; spectral reference unspecified). Standalone f = -146.891018 mm.

**L2 - Positive Meniscus.** n (source) = 1.622992, ν (source) = 58.2. Glass: Unmatched (source n=1.622992, ν=58.2; spectral reference unspecified). Standalone f = +99.820738 mm.

L1 is a negative meniscus cemented to the positive-meniscus L2. Although the two standalone powers oppose each other,
the complete C1 assembly is weakly positive, with a computed focal length in air of +322.765489 mm. This is distinct
from the +90.817140 mm focal length of the complete G1 matrix after L3 and the internal spacings are included.

The pairing places a high-index, low-Abbe flint-like material against a lower-index crown-like material. The combination
provides first-order chromatic balancing while preserving the bending needed by the large front group. Only the source index/Abbe pairs support approximate chromatic modeling; the unknown reference line does not justify catalog curve selection or an apochromatic claim.

### L3 - Positive Meniscus

**L3 - Positive Meniscus.** n (source) = 1.622992, ν (source) = 58.2. Glass: Unmatched (source n=1.622992, ν=58.2; spectral reference unspecified). Standalone f = +123.299441 mm.

L3 is a separate positive meniscus behind C1. It adds most of the remaining positive power required to make G1 a
positive group while leaving an air space between the cemented front pair and the rear member. Its repeated source coordinate with L2 keeps the positive portion of G1 within one crown-like dispersion class; historical material identity remains unresolved.

The revised inferred G1 heights follow native Fig. 1. They remain modeling values with about ±1 mm endpoint uncertainty, rather than published production clear apertures or dimensions inferred from a filter thread.

### H1: L4r and L4 - Hybrid Negative Aspheric Component

**L4r - Neg. Meniscus (1× Asph).** n (source) = 1.514210, ν (source) = 51.4. Glass: Unmatched (bonded thin layer; source n=1.51421, ν=51.4; spectral reference unspecified). Standalone
f = -847.565314 mm.

**L4 - Negative Meniscus.** n (source) = 1.834000, ν (source) = 37.2. Glass: Unmatched (source n=1.834, ν=37.2; spectral reference unspecified). Standalone f = -22.775172 mm.

L4r is the 0.05 mm layer entered at aspherical surface 6A and bonded to the L4 substrate at surface 7. Its very weak
standalone power reflects the thin-layer model; its significance lies in the aspheric departure and in the interface it
creates with the high-index substrate. No catalog identity is assigned because the stored n (source)/ν (source) pair does not support a
defensible public-glass match.

The combined H1 assembly has a computed focal length in air of -22.163305 mm. It therefore acts as a strong negative
front component of G2. The asphere is positioned where the chief- and marginal-ray geometry changes strongly with zoom,
allowing one surface to participate in correction over the wide-to-tele range. The bonded-replica interpretation is a
modeling inference; the patent itself supplies the optical layer but not a manufacturing label.

### L5 - Biconcave Negative Element

**L5 - Biconcave Negative.** n (source) = 1.834807, ν (source) = 42.7. Glass: Unmatched (source n=1.834807, ν=42.7; spectral reference unspecified). Standalone f = -26.393152 mm.

L5 is a biconcave negative singlet separated from H1 by a substantial air gap. It reinforces the negative power of G2
without adding another cemented interface. Its high index allows strong curvature and power within the compact second
group.

As an air-spaced member, L5 can distribute the negative power of G2 across separated principal surfaces rather than
concentrating all of it in H1. That distribution is important in a group whose axial position changes for both zooming
and focusing.

### L6 - Biconvex Positive Element

**L6 - Biconvex Positive.** n (source) = 1.846660, ν (source) = 23.9. Glass: Unmatched (source n=1.84666, ν=23.9; spectral reference unspecified). Standalone f = +19.601756 mm.

L6 is a strong biconvex positive singlet embedded within the otherwise negative G2. Its positive power moderates the
ray bending produced by H1 and L5 while preserving the net negative group focal length. Because it uses the same
high-index, low-Abbe glass as L1, L8, and L11, it also participates in the repeated high-index/contrasting-dispersion
pairing used throughout the zoom.

The element should not be interpreted as a positive zoom group by itself. Its in-situ action is governed by the adjacent
air spaces and the negative members around it; the complete G2 remains strongly negative at -14.471292 mm.

### C2: L7 and L8 - Cemented Negative Pair

**L7 - Biconcave Negative.** n (source) = 1.804000, ν (source) = 46.6. Glass: Unmatched (source n=1.804, ν=46.6; spectral reference unspecified). Standalone f = -21.342363 mm.

**L8 - Biconvex Positive.** n (source) = 1.846660, ν (source) = 23.9. Glass: Unmatched (source n=1.84666, ν=23.9; spectral reference unspecified). Standalone f = +71.917980 mm.

L7 is biconcave and cemented to the biconvex L8. The complete C2 assembly remains negative, with a computed focal length
in air of -30.803767 mm. This final negative assembly completes G2 immediately before the large zoom-dependent gap D15
and the aperture stop.

The Abbe-number ordering is opposite to that of a conventional positive crown/negative flint achromat: the more strongly
negative member has the higher ν (source), while the weaker positive member has the lower ν (source). That arrangement is consistent
with the patent's explicit dispersion constraints for the second group and permits longitudinal color correction without
surrendering the required negative group power.

### L9 - First Positive Element of G3

**L9 - Biconvex Positive.** n (source) = 1.518229, ν (source) = 58.9. Glass: Unmatched (source n=1.518229, ν=58.9; spectral reference unspecified). Standalone f = +30.181663 mm.

L9 is a biconvex positive singlet immediately behind the stop. It supplies the first strong convergence in G3 and helps
set the exit-pupil geometry of the rear system. The source coordinate n = 1.518229 and ν = 58.9 previously suggested S-NSL3. The source does not identify its reference line, so that catalog candidate is unverified and no curve is enabled.

Its position next to the stop gives it high leverage over axial marginal rays while limiting the chief-ray height
relative to the large front group. This placement supports a compact positive relay after the negative variator.

### C3: L10 and L11 - Weak Positive Cemented Pair

**L10 - Biconvex Positive.** n (source) = 1.517417, ν (source) = 52.4. Glass: Unmatched (source n=1.517417, ν=52.4; spectral reference unspecified). Standalone f = +24.801607 mm.

**L11 - Negative Meniscus.** n (source) = 1.846660, ν (source) = 23.9. Glass: Unmatched (source n=1.84666, ν=23.9; spectral reference unspecified). Standalone f = -28.742226 mm.

L10 is biconvex and cemented to the negative-meniscus L11. Their strong opposing standalone powers reduce to a weakly
positive cemented assembly with a computed focal length in air of +140.951566 mm. Together with L9, C3 leaves G3
positive at +24.601852 mm.

The large dispersion difference between the crown-like L10 and the high-index, low-Abbe L11 provides a direct
chromatic-correction mechanism within the positive relay. The patent's third-group dispersion condition is satisfied by
this prescription, but the result is properly described as chromatic balancing rather than apochromatic correction.

### C4: L12 and L13 - Cemented Negative Compensator

**L12 - Positive Meniscus.** n (source) = 1.728250, ν (source) = 28.5. Glass: Unmatched (source n=1.72825, ν=28.5; spectral reference unspecified). Standalone f = +35.971241 mm.

**L13 - Negative Meniscus.** n (source) = 1.882997, ν (source) = 40.8. Glass: Unmatched (source n=1.882997, ν=40.8; spectral reference unspecified). Standalone f = -19.819009 mm.

L12 is a positive meniscus cemented to the stronger negative-meniscus L13. Their net focal length in air is -41.255033
mm. Since G4 contains only this cemented pair, the cemented-assembly focal length and the functional-group focal length
are the same.

The pair acts as the negative compensator between G3 and G5. Its zoom-dependent position changes the conjugate relation
between the two positive rear groups while preserving the fixed image plane. The combination of a low-ν (source) positive member
and a higher-ν (source) negative member also supplies chromatic leverage without changing the group's negative sign.

### L14 - Biconvex Positive Rear Asphere

**L14 - Biconvex Positive (1× Asph).** n (source) = 1.583126, ν (source) = 59.4. Glass: Unmatched (source n=1.583126, ν=59.4; spectral reference unspecified). Standalone f = +28.643528 mm.

L14 is the leading positive element of G5. Its rear surface, 26A, carries the second aspherical prescription. This member
provides the principal positive power at the front of the rear group while the asphere controls the peripheral departure
before the weaker positive L15 and final negative L16.

The high ν (source) and moderate index make L14 a crown-like positive component. The aspheric surface reduces the need to obtain
all correction through extreme spherical bending. The patent and Canon product description establish the presence of an
aspherical element, but they do not specify whether this particular surface was polished, molded, or replicated.

### L15 - Weak Biconvex Positive Element

**L15 - Biconvex Positive.** n (source) = 1.518229, ν (source) = 58.9. Glass: Unmatched (source n=1.518229, ν=58.9; spectral reference unspecified). Standalone f = +100.846418 mm.

L15 is a weak positive singlet behind L14. It extends the positive action of G5 while distributing the rear-group power
over two separated positive elements. The source coordinate repeats L9, but no catalog curve or historical glass identity is established for either medium.

Its large standalone focal length shows that it is not the primary power-bearing element of G5. Its in-situ value lies in
its spacing relative to L14 and L16 and in the way that spacing shapes the rear principal plane over the zoom range.

### L16 - Final Negative Meniscus

**L16 - Negative Meniscus.** n (source) = 1.806098, ν (source) = 40.9. Glass: Unmatched (source n=1.806098, ν=40.9; spectral reference unspecified). Standalone f = -30.242699 mm.

L16 is the final negative meniscus. It counteracts part of the positive power of L14 and L15 while leaving G5 positive at
+48.870271 mm. Its position near the image side gives it substantial influence over the rear principal plane and the
balance of field curvature and distortion.

The surface-by-surface Petzval calculation shows a strong negative contribution at surface 29 followed by a positive
contribution at surface 30. The complete prescription retains a small positive Petzval sum of 0.001653324249 mm⁻¹,
corresponding to a Petzval-radius magnitude of 604.842033 mm. This is a computed first-order field-curvature measure, not
a claim about the fully corrected best-focus surface.

## Glass Identification and Selection

The 2026-10-30 original-PDF review checked all 17 modeled media directly against Numerical Example 1 on PDF p. 6, including the 0.05 mm bonded aspheric layer. Paragraph 0050 on PDF p. 5 defines ni/νi as refractive index and Abbe number, without specifying a spectral reference line. The claims, example introduction and tables supply no explicit material d/e definition or numeric wavelength. The d/g labels on the aberration plots identify plotted wavelengths; they do not define the prescription's ni/νi values.

All 17 literal pairs are retained. Every medium now carries `indexReferenceNote` and an explicit `Unmatched` label. Approximate d-line tracing remains the numerical convention; no historical line identity is asserted. The 16 previously active catalog curves are disabled. All 64 catalog-derived per-lens nC/nF/ng/dPgF fields are removed because the original publishes none of them. Coordinate proximity cannot verify the missing reference line. Source chemistry, supplier and melt remain unresolved; the thin-layer manufacturing process is also inferred. No APD evidence, source filter, rear plate or numerical cement is supplied.

| Modeled medium | Source n | Source ν | Disposition |
|---|---:|---:|---|
| L1 | 1.846660 | 23.9 | Unresolved source reference; no active curve |
| L2 | 1.622992 | 58.2 | Unresolved source reference; no active curve |
| L3 | 1.622992 | 58.2 | Unresolved source reference; no active curve |
| L4r | 1.514210 | 51.4 | Unresolved source reference; no active curve |
| L4 | 1.834000 | 37.2 | Unresolved source reference; no active curve |
| L5 | 1.834807 | 42.7 | Unresolved source reference; no active curve |
| L6 | 1.846660 | 23.9 | Unresolved source reference; no active curve |
| L7 | 1.804000 | 46.6 | Unresolved source reference; no active curve |
| L8 | 1.846660 | 23.9 | Unresolved source reference; no active curve |
| L9 | 1.518229 | 58.9 | Unresolved source reference; no active curve |
| L10 | 1.517417 | 52.4 | Unresolved source reference; no active curve |
| L11 | 1.846660 | 23.9 | Unresolved source reference; no active curve |
| L12 | 1.728250 | 28.5 | Unresolved source reference; no active curve |
| L13 | 1.882997 | 40.8 | Unresolved source reference; no active curve |
| L14 | 1.583126 | 59.4 | Unresolved source reference; no active curve |
| L15 | 1.518229 | 58.9 | Unresolved source reference; no active curve |
| L16 | 1.806098 | 40.9 | Unresolved source reference; no active curve |

Previously named OHARA rows remain historical coordinate candidates only; neither their dispersion curves nor catalog partials are evidence of production glass or the source wavelength. The earlier catalog inspection is not counted as a fresh original-PDF spectral measurement.

## Focus Mechanism

Canon describes the production lens as using second-group inner focusing, with a 0.45 m closest focusing distance at all
focal lengths and a maximum magnification of 0.28× at 200 mm. The patent allows one or more groups to focus and states
that second-group movement is preferable (¶0044-¶0045), but Numerical Example 1 publishes only infinity-focus zoom
spacings.

The finite-distance states in the data file are therefore marked **CONSTRAINED_RECONSTRUCTION**, not published patent
states. The reconstruction applies four constraints:

1. G2 moves alone.
2. The image plane remains fixed.
3. D5 + D15 is conserved at each zoom station, as required by rigid translation of G2 between its adjacent groups.
4. The paraxial imaging condition is solved for an object-to-image distance of 450 mm.

| State | G2 motion toward object | D5 infinity → close | D15 infinity → close | Conserved D5 + D15 | Computed magnification magnitude |
|---|---:|---:|---:|---:|---:|
| Wide | 1.215715 mm | 2.340000 → 1.124285 mm | 18.540000 → 19.755715 mm | 20.880000 mm | 0.079332 |
| Middle | 3.061103 mm | 28.590000 → 25.528897 mm | 9.120000 → 12.181103 mm | 37.710000 mm | 0.183108 |
| Tele | 8.315696 mm | 47.130000 → 38.814304 mm | 1.750000 → 10.065696 mm | 48.880000 mm | 0.275305 |

The tele-state reconstruction gives |m| = 0.275305, consistent with Canon's rounded 0.28× specification. Magnification
was not used as a free tuning target; it follows from the fixed-distance imaging solution. No alternative multi-group
focus model is asserted because the patent does not provide enough finite-distance data to determine one uniquely.

## Aspherical Surfaces

Two surfaces are aspherical: 6A on the thin L4r layer and 26A on the rear of L14. The patent writes the sag as a spherical
base plus even-order polynomial terms (¶0051):

```text
X = (Y²/r) / (1 + sqrt(1 - (Y/r)²))
    + A·Y² + B·Y⁴ + C·Y⁶ + D·Y⁸ + E·Y¹⁰ + F·Y¹²
```

The conic base is spherical. In the LensVisualizer convention this is K = 0. The patent prints A = 0; its B, C, D, and E
map directly to A4, A6, A8, and A10. No nonzero Y¹² coefficient is supplied.

| Surface | K | A4 (mm⁻³) | A6 (mm⁻⁵) | A8 (mm⁻⁷) | A10 (mm⁻⁹) |
|---|---:|---:|---:|---:|---:|
| 6A | 0 | +4.38644e-6 | +2.81127e-8 | -2.86365e-10 | +1.27865e-12 |
| 26A | 0 | +1.07579e-5 | +1.68849e-8 | +7.49501e-12 | -1.82624e-13 |

No dimensional scaling was applied, so the coefficients are stored without a scale transformation. Had a uniform scale
factor s been required, each coefficient A_p would have been divided by s^(p-1) while K remained unchanged; that
operation is not part of this model.

The patent does not publish mechanical semi-diameters. Source asphere coefficients are retained without tuning. The shared 13.4 mm front/bonded boundary of the thin layer gives a positive 0.019367 mm minimum layer thickness in a 13,401-point profile scan; it creates no disconnected resin wing. The layer's own outer endpoint cannot be independently resolved at the native raster scale, so that shared component boundary remains qualified. These are geometric modeling results, not published production clear apertures or manufacturing evidence.

Surface 6A is modeled as the exposed surface of a bonded thin layer on L4, making a replica or hybrid interpretation
probable. Surface 26A is modeled directly on the L14 substrate. The available sources do not establish the production
method of either surface.

## Chromatic Correction Strategy

The chromatic strategy is distributed among several opposing-power pairs rather than isolated in one special glass.
C1 uses a negative, high-index, low-ν (source) member against a positive crown-like member. C2 and C4 reverse the usual simple
achromat power/dispersion ordering, while C3 uses a conventional positive crown-like member against a high-index,
low-ν (source) negative member. These combinations allow the moving groups to preserve their required net signs while
controlling longitudinal color.

The patent's material conditions are satisfied by Numerical Example 1. The second group has a 22.640 Abbe-number
difference between the designated negative and positive materials, exceeding both the main lower limit of 15 and the
preferred lower limit of 20. The designated positive material in that group has ν (source) = 37.160, within both the main
35-45 range and the preferred 35-40 range. The third group's designated positive/negative Abbe-number difference is
28.500, exceeding the main limit of 20 and preferred limit of 25.

No individual source line indices or partial-dispersion values are available. Approximate Abbe tracing uses the retained source pairs at an explicitly qualified d-line reference; all 17 historical media remain unresolved. No source claims APO correction, and no APD classification is assigned.

## Conditional Expressions

The patent provides material and group-power conditions for the five-group architecture (¶0011-¶0015 and
¶0033-¶0042). Numerical Example 1 satisfies
both the broad claim intervals and the narrower preferred intervals.

| Condition | Example 1 | Main interval | Preferred interval | Result |
|---|---:|---|---|---|
| ν2dn - ν2dp | 22.640 | > 15.0 | > 20.0 | Passes both |
| ν3bp - ν3bn | 28.500 | > 20.0 | > 25.0 | Passes both |
| ν2a | 37.160 | 35.0 < x < 45.0 | 35.0 < x < 40.0 | Passes both |
| f1/ft | +0.470 | 0.38 < x < 0.58 | 0.42 < x < 0.53 | Passes both |
| f2/ft | -0.075 | -0.09 < x < -0.06 | -0.085 < x < -0.065 | Passes both |
| f3/ft | +0.127 | 0.10 < x < 0.15 | 0.11 < x < 0.14 | Passes both |
| f4/ft | -0.214 | -0.26 < x < -0.15 | -0.23 < x < -0.17 | Passes both |
| f5/ft | +0.253 | 0.18 < x < 0.30 | 0.21 < x < 0.28 | Passes both |

The independently computed group ratios differ from Patent Table 1 by no more than 0.000398. This agreement is one of
the checks supporting the four restored and three retained negative radius signs and the positive-negative-positive-negative-positive power
sequence.

## Verification Summary

Sequential paraxial tracing in height/reduced-angle coordinates was checked against an independent height/angle ABCD
formulation. The maximum matrix-element difference was 4.26326e-14, and the system determinant remained unity within
floating-point precision.

| Zoom state | Patent f | Computed EFL | Residual | Modeled f-number | Computed BFD | Patent f·tan ω image height |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 28.92 mm | 28.896161 mm | -0.023839 mm | f/3.63 | 38.245833 mm | 21.634924 mm |
| Middle | 80.00 mm | 79.937822 mm | -0.062178 mm | f/5.06 | 52.547644 mm | 21.630600 mm |
| Tele | 193.14 mm | 192.911008 mm | -0.228992 mm | f/5.88 | 60.202808 mm | 21.629989 mm |

The nearly constant 21.63 mm image height follows independently from the published focal lengths and half-fields and is
consistent with the diagonal semi-field of the 135 format. The modeled f-number array uses the exact patent states,
whereas the product identity retains the rounded f/3.5-5.6 designation.

The patent does not publish a stop diameter. The actual derived iris radii are 8.437157/8.233896/8.169032 mm, with project paraxial f-numbers 3.63/5.06/5.88. Independent collimated real-beam input-diameter ratios are approximately 3.682585/5.153861/5.988473. The existing stop position and derived rule remain unchanged. Neither convention establishes a physical station-by-station iris schedule.

The 2026-10-30 native-figure pass revised 14 inferred clear caps and added one S8 rear shoulder. All 65 diagnostic zooms now reach the configured aperture through the stop; the old S17 = 9.1 mm cap caused up to +2.333156% axial restriction at intermediate zooms. Source Fig. 1 supports the adopted 9.8 mm S17 cap, which removes that unintended clipping without changing R/d or the iris rule. All 65 positions pass existing surface/aperture checks and at least 99% corner coverage, with no unsolved field, undersized image circle or blocked chief. The diagnostic reproduces authored surface positions and stop radii with zero difference.

Across 65 zoom × 21 focus controls, all 1,365 render states have 17 finite, closed, connected paths with zero hidden renderer trimming. Nine actual SVGs were compared directly with native Fig. 1(A/B/C). A separate 441-control × three-field × 97-pupil probe samples 128,331 rays with positive object-to-image distances 450/focus mm at finite focus, using the shared field/chief solver at infinity. Every axial bundle is 97/97 clear; every chief ray clears, with no seed or aiming failure. All 2,908 full-field marginal noBracket entries occur before S1 and independently intersect the unrestricted first sphere outside its adopted 30.5 mm cap; none is an unexplained inside-cap failure. Other off-axis clipping remains ordinary sampled vignetting.

The linear zoom/focus interpolation remains illustrative. At zoom t = 0.8125 infinity BF is 63.596146 mm against image gap 57.332122 mm, +6.264025 mm defocus, with computed EFL 144.681129 mm. Only the three source infinity stations are quantitative anchors. The reconstructed finite-focus anchors target 450 mm, but the positive-object rim probe does not certify intermediate focus accuracy or a production field map. All numeric runtime conclusions also retain the source-reference uncertainty described above.

## Modeling Boundaries and Source Corrections

The model is a native-scale transcription. No focal-length scaling, dimensional scaling, image-plane scaling, or
asphere-coefficient transformation was applied.

The aperture-stop position is published as source surface 16 and is therefore not inferred. Its semi-diameter is inferred
from the modeled f-number and entrance-pupil geometry. Clear semi-diameters remain inferred because Numerical Example 1 gives none. Native Fig. 1 now supplies their optical-rim basis, with runtime probes kept separate from source fidelity and production correlation.

No sensor cover glass, filter, inactive dummy plane, flare cutter, blocker, or mechanical component appears as an active
plane in Numerical Example 1, and none is included in the data. No omitted plate requires an air-equivalent rear-spacing
correction.

The abstract's description of a positive fourth group and negative fifth group conflicts with the claims, the detailed
architecture in ¶0010, the figures, the numerical prescription, and the computed group powers. The data follows the convergent evidence: G4 is
negative and G5 is positive.

Four existing radius signs are retained and formalized in `source.errata`: source rows 12, 18, 23 and 26 print positive values, while the model uses −45.611/−29.422/−15.708/−20.778 mm. The printed negative signs at 20, 28 and 29 are retained. All 16 combinations of the four omitted signs were compared independently. Only the complete restored block reproduces the three focal summaries and all five Table 1 ratios (PDF p. 9); its maximum ratio residual is 0.000398. Literal printed rows yield EFL −2.985733/−5.309944/−10.170225 mm. Claim 5 on PDF p. 2 independently rejects the printed block and accepts the restored ratios 0.470214/−0.074926/0.127378/−0.213602/0.253030. Source-summary isolates the block and claims corroborate it as a unit. No numeric R/d change was needed in this review.

The native figure is a 1656 × 2339 raster at 200 ppi. The roughly 256-pixel first-to-last vertex span over 93.27 mm gives about 2.75 px/mm, or 0.36 mm per native pixel. Practical rim uncertainty is about ±1 mm; a three-times reading enlargement adds no native resolution. Fig. 1's W/M/T sections belong to Example 1, while Fig. 5/9/13 show sibling configurations. Group brackets, arrows and SP/leader strokes are excluded from endpoint measurements.

The front doublet follows roughly 30.5 mm endpoints; L3 follows 27.8. The hybrid front/bonded pair follows the roughly 13.4 mm component rim. S8 retains its 10.7 mm clear cap and gains `rimExtensionSd: 13.4` for the resolved rear shoulder. The native concave endpoint is not precise enough to demand the initially tried 9.8 mm cap, so 10.7 remains within practical uncertainty. G4 follows roughly 9 mm endpoints; rear L14/L15 follow 11.4/11.5. All other small endpoint differences remain unresolved within native uncertainty.

Retained constraints: a full S13 = 9.2 mm blank gives 1.17 mm combined sag against the existing 0.954 mm allowance across D12 = 1.06. A full S29 = 11.3 gives 2.59 against 2.070 mm allowed across D28 = 2.3. Their existing clear caps 8.2 and 10 mm remain. No source coefficient or R/d was tuned to fit a drawing, no tolerance was relaxed, and no opaque interface land, disconnected resin wing or inferred cut was introduced. See the [audit sidecar](./CanonEF28200mmf3556USM.audit.md) for the complete element disposition.

The finite-focus rows are a constrained reconstruction and must not be cited as patent-published spacings. The model uses
G2-only movement because this is both permitted by the patent and consistent with Canon's production description. The
solution is disclosed in the data header, focus description, and this analysis.

## Sources

1. JP 2001-350095 A, *Zoom lens and optical apparatus using the same*, Canon Inc., Numerical Example 1. The attached
   patent PDF is the numerical and architectural authority; the prescription appears on PDF page 6, the example table and
   condition summary on PDF page 9, and the zoom sections and aberration plots on PDF pages 10-16.
2. Canon Camera Museum, “EF28-200mm f/3.5-5.6 USM,” official product identity and marketed specifications:
   <https://global.canon/en/c-museum/product/ef361.html>.
3. Earlier OHARA catalog coordinate research; no curve is enabled by this review because the source reference line is unspecified:
   <https://oharacorp.com/glass-catalog/>.
