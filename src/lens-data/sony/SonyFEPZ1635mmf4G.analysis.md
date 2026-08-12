## Patent Reference and Design Identification

- **Patent:** JP 2023-44106 A
- **Application Number:** JP 2021-151965
- **Filed:** September 17, 2021
- **Published:** March 30, 2023
- **Inventors:** Kohei Uemura; Tetsuichiro Okumura; Naoki Miyagawa
- **Applicant:** Sony Group Corporation
- **Title:** Zoom Lens and Imaging Apparatus
- **Embodiment analyzed:** Example 5

The prescription modeled here is Example 5 of JP 2023-44106 A. The production identification is the Sony FE PZ
16–35mm f/4 G, but that identification is a correlation rather than an explicit statement by Sony in the patent. The
patent itself describes a family of compact wide-angle zoom lenses intended to reduce the mass of the groups that must
move during zooming, particularly for electrically driven zoom systems (¶¶0012, 0028–0029, 0052, 0060).

Several independent characteristics make Example 5 consistent with the production lens. Sony specifies the SELP1635G as
a full-frame E-mount 16–35mm f/4 power zoom with 13 elements in 12 groups and minimum focusing distances of 0.28 m at
the wide end and 0.24 m at the tele end. Example 5 has 13 glass elements in 12 air-separated optical groups, a published
zoom range of 16.48–33.96 mm at Fno 4.12, and five kinematic groups in which the large front group and the final group
remain fixed while the three middle groups move during zooming. Its third kinematic group is also a published internal
focus group. These correspondences support the selected production correlation, but they do not constitute manufacturer
confirmation that Example 5 is the released SELP1635G prescription.

The distinction between marketed and design quantities is retained throughout this analysis. The production lens is
marketed as 16–35mm f/4. The patent's three infinity-focus states are 16.48, 22.87, and 33.96 mm at Fno 4.12; independent
paraxial calculation from the modeled prescription gives effective focal lengths of 16.487080, 22.874666, and
33.963363 mm. The model therefore uses 4.12 as its nominal wide-open f-number rather than replacing it with the rounded
marketing value f/4.

No scale factor is applied. All radii, spacings, semi-diameters, and aspheric coefficients remain in the patent's native
millimeter scale. The patent's effective diameters $\phi$ are represented as semi-diameters $sd=\phi/2$. At the aperture
stop, the published $\phi=15.50$ mm is retained as a 7.75 mm clear-aperture envelope; it is not interpreted as a
published physical iris opening. The live wide-open aperture is instead governed by the modeled Fno 4.12.

The numerical table contains no sensor cover glass, filter, inactive dummy plane, flare cutter, or other non-imaging
plane. Patent ¶0016 permits such plates generically between the lens and image sensor, but Example 5 does not specify one,
so none is inserted into this model.

One source inconsistency is retained rather than silently corrected. Condition (8) is printed as a positive-bounded
$f_{G2}/f_w$ ratio even though Example 5's second front negative meniscus has negative focal length. The literal ratio is
negative, while Table 62 prints its positive magnitude. The prescription itself is unchanged; the discrepancy is treated
as a textual error in the condition, discussed below.

## Optical Architecture

Example 5 is a five-kinematic-group wide-angle zoom with group power sequence `negative – positive – positive – negative
– positive`. The five kinematic groups should not be confused with the production-style construction count: the data file
contains 13 glass elements in 12 air-separated optical groups because L22 and L23 form the single cemented doublet.

The patent describes the family as a retrofocus-type power arrangement (¶0029). Under the stricter numerical convention
used here, however, the term is reserved for states in which paraxial back focal distance exceeds effective focal length.
The Wide state satisfies that test, with BFD = 20.648829 mm and EFL = 16.487080 mm. The Mid and Tele states do not, so
“retrofocus” is used here only for the wide endpoint rather than as an unqualified label for the entire zoom range.

| Kinematic group | Elements | Net EFL (mm) | Zoom behavior | Principal structural role |
|---|---|---:|---|---|
| GR1 | L11–L14 | −19.498541 | Fixed | Front negative section; establishes the wide-angle divergence while remaining mechanically stationary |
| GR2 | L21–L23 + STO | +25.793099 | Moves objectward | Stop-bearing positive moving group; principal positive zoom section |
| GR3 | L31–L32 | +52.450370 | Moves objectward; also focuses | Positive internal focus group |
| GR4 | L41–L43 | −28.454751 | Moves objectward | Second negative moving group; part of the distributed zoom compensation |
| GR5 | L51 | +82.558417 | Fixed | Positive rear relay / fixed terminal group |

The independently calculated group focal lengths reproduce patent Table 25 to its 0.01 mm precision. These group powers
are in-situ group results for the complete kinematic groups; they are distinct from the standalone in-air focal lengths
listed for individual elements below.

The large front group is stationary over zoom. This is the central mechanical idea of the patent: in a wide-angle
negative-front system, moving the large-diameter first group increases the mass that the zoom drive must accelerate. The
patent instead moves the smaller rear groups on independent objectward trajectories (¶¶0029, 0052). Between the Wide and
Tele states, GR2, GR3, and GR4 move objectward by 19.25, 17.79, and 11.73 mm respectively, while GR1 and GR5 remain fixed.
The patent explains that the independent trajectories distribute magnification change, image-plane compensation, and
field-curvature variation among the moving groups rather than assigning those functions to an additional dedicated
compensator (¶0052).

GR5's fixed position also follows the patent's preferred mechanical arrangement for an interchangeable powered zoom.
Paragraph 0053 notes that a stationary final group can keep the zoom drive mechanism from being exposed near the mount.
The numerical Example 5 implements that preference directly.

The sole aperture stop lies inside GR2, after L21 and before the L22/L23 cemented pair. The patent specifically places an
asphere in the first negative group and another in the stop-bearing positive group so that those surfaces act where the
off-axis chief-ray height or axial ray height is large (¶¶0050–0051). Example 5 extends the aspheric distribution farther
rearward as well: L32 in the focus group and L43 in GR4 are also double-aspheric elements.

## Element-by-Element Analysis

The focal lengths in this section are standalone, in-air, thick-lens values calculated at the d line from each element's
radii, center thickness, and refractive index. They describe isolated element power, not the element's exact contribution
inside the assembled zoom. For the L22/L23 cemented doublet, the cemented net is given separately.

### L11 — Negative Meniscus, Convex to Object

**nd = 1.83481, νd = 42.7. Glass: 835427 class (vendor unresolved). f = −35.874032 mm.**

L11 is the first of the three negative elements emphasized by the patent for the stationary front negative group. Its
object-convex meniscus form is also one of the shapes directly constrained by the patent's front-group conditions. In the
assembled GR1, it supplies substantial negative power while presenting a curved object-side surface to the very wide
field.

Condition (3) controls the bending of L11 through the relation between its two radii, while condition (7) couples L11's
rear curvature to the front curvature of L12. The patent associates these choices with off-axis correction, front-element
diameter, and manufacturability (¶¶0036–0037, 0054–0056).

### L12 — Negative Meniscus, Convex to Object, Two Aspheres

**nd = 1.58313, νd = 59.5. Glass: 583595 class (vendor unresolved). f = −54.289791 mm.**

L12 is the patent's second front negative meniscus. Both surfaces, 3A and 4A, are aspherical. The patent's general design
rationale places aspheric correction in the front negative group because off-axis chief rays are high there, making the
surface particularly effective for field-dependent aberrations such as field curvature (¶0050).

Its standalone focal length is also the $f_{G2}$ quantity used by conditions (4) and (8). Condition (4) relates L12's
negative power to the net power of GR1, limiting how much of the front group's divergence is concentrated in this single
element (¶¶0039–0041). Condition (8) compares the same element with the wide-end system focal length, although the printed
sign convention is internally inconsistent for Example 5.

### L13 — Biconcave Negative

**nd = 1.49700, νd = 81.6. Glass: 497816 class (vendor unresolved). f = −46.090358 mm.**

L13 is the third negative element in GR1. Its biconcave form provides another distributed source of negative power rather
than forcing L11 and L12 to carry the entire front-group divergence. This follows the patent's stated reason for using
three negative lenses in the first negative group: dividing the power helps avoid excessively strong individual negative
members and the resulting difficulty in correcting field curvature and lateral chromatic aberration (¶0042).

The high νd coordinate is preserved as source data, but no specific ED or catalog glass designation is assigned. Several
vendors publish glasses near this coordinate, so assigning one would overstate what the patent establishes.

### L14 — Positive Meniscus, Convex to Object

**nd = 1.85451, νd = 25.2. Glass: 855252 class (vendor unresolved). f = +46.700432 mm.**

L14 is the sole positive element in GR1. Its positive standalone power partially offsets the three preceding negative
elements, leaving the complete stationary group at a measured −19.498541 mm rather than at the much stronger sum implied
by the negative singlets alone. The role is therefore best understood in the context of the complete group rather than
from its isolated +46.700432 mm focal length.

Its high index and low νd coordinate provide a different dispersion and bending degree of freedom from L13 immediately
in front of it. The patent does not identify a vendor or a commercial glass name for this coordinate, so the data retains
only the six-digit class description.

### L21 — Biconvex Positive, Two Aspheres

**nd = 1.58313, νd = 59.5. Glass: 583595 class (vendor unresolved). f = +42.204882 mm.**

L21 is the first element of the positive stop-bearing GR2 and uses the same d-line coordinate class as L12. Both surfaces,
9A and 10A, are aspherical. GR2 is the primary positive moving section ahead of the stop and has a computed group focal
length of +25.793099 mm.

Patent ¶0051 explains the rationale for an asphere in the positive group: the front negative group causes a relatively
large axial ray height in this region, so an asphere here provides leverage over spherical aberration and coma,
particularly toward the long end of the zoom. L21 is the Example 5 surface pair that implements that stated strategy.

### L22 — Negative Meniscus, Front Member of Cemented D1

**nd = 1.80610, νd = 33.3. Glass: 806333 class (vendor unresolved). f = −53.101032 mm.**

L22 lies behind the aperture stop and is cemented directly to L23 at surface 13. Its isolated power is negative, but the
cemented pair is not negative overall. The common interface must therefore be interpreted as part of the pair's combined
power and chromatic behavior rather than as an air-spaced boundary.

The data assigns the cemented interface to the downstream L23 glass, matching the physical transition from L22 to L23.
No synthetic cement layer is present.

### L23 — Biconvex Positive, Rear Member of Cemented D1

**nd = 1.45860, νd = 90.2. Glass: 459902 class (vendor unresolved). f = +24.644994 mm.**

L23 is the stronger positive member of D1. In isolation its +24.644994 mm focal length is much shorter than the negative
member's magnitude. When the two elements are combined at their real cemented interface, the doublet has a net focal
length of +45.135324 mm. That cemented-net value is distinct from both standalone powers and from the +25.793099 mm power
of the entire GR2 group, which also includes L21 and the intervening spacings.

The very high νd coordinate of L23 and the more dispersive L22 coordinate give the cemented pair substantial first-order
chromatic balancing freedom. The patent, however, publishes no line indices or partial-dispersion data, so this analysis
does not infer apochromatic or anomalous-dispersion behavior from νd alone.

### L31 — Negative Meniscus, Concave to Object

**nd = 1.77047, νd = 29.7. Glass: 770297 class (vendor unresolved). f = −56.563369 mm.**

L31 is the negative front member of the two-element GR3 focus group. Its object-concave meniscus opposes the positive L32
behind it. The complete pair remains positive, with a group focal length of +52.450370 mm.

GR3 participates in zooming and is also the sole published focusing group in Example 5. L31's role therefore cannot be
reduced to its isolated negative power: its spacing and power work together with L32 as the complete translating focus
unit.

### L32 — Biconvex Positive, Two Aspheres

**nd = 1.49710, νd = 81.6. Glass: 497816 class (source nd 1.49710; vendor unresolved). f = +29.012292 mm.**

L32 is the stronger positive member of GR3 and carries aspheres on surfaces 17A and 18A. The patent's prose describes it
as biconvex; Table 24 supplies the two aspheric coefficient sets that establish the modeled departures from those base
curvatures.

Its high νd coordinate is close to, but not numerically identical with, L13's 1.49700/81.6 coordinate. The distinction is
preserved rather than rounded into a single assumed catalog melt. Together with L31, L32 forms the positive internal
focus group that shifts objectward at close focus.

### L41 — Positive Meniscus, Concave to Object

**nd = 1.94595, νd = 18.0. Glass: 946180 class (vendor unresolved). f = +84.932872 mm.**

L41 begins GR4 with weak positive standalone power and an unusually high refractive index / low νd coordinate. The group
as a whole is nevertheless negative because the following two elements are negative. This illustrates why isolated
singlet focal length should not be treated as the in-situ power of a multi-element moving group.

GR4 is the “second negative group” used by the patent's condition (5). It moves objectward over the zoom range while GR5
remains stationary behind it.

### L42 — Negative Meniscus, Concave to Object

**nd = 1.91082, νd = 35.2. Glass: 911353 class (source vd rounded 35.2; vendor unresolved). f = −36.208816 mm.**

L42 supplies the strongest negative standalone power within GR4. Its object-concave meniscus continues the rearward
negative bending begun by the group architecture, but unlike L43 it remains spherical in the numerical example.

The coordinate is retained at the patent's stated precision. No catalog name is imposed because the source gives neither
a vendor nor enough spectral data to distinguish equivalent or near-equivalent glasses.

### L43 — Negative Meniscus, Concave to Object, Two Aspheres

**nd = 1.85135, νd = 40.1. Glass: 851401 class (vendor unresolved). f = −57.555988 mm.**

L43 is the final element of GR4 and carries aspheric surfaces 23A and 24A. Together with L42 it overcomes L41's weak
positive power and produces the group's net −28.454751 mm focal length.

Because it sits immediately ahead of the long, zoom-dependent gap to the fixed rear group, its double-aspheric shape is
well placed to adjust the beam entering GR5 while GR4 changes position. That functional description is an inference from
its location and the published motion; the patent does not assign L43 a unique named aberration-correction function.

### L51 — Positive Meniscus, Concave to Object

**nd = 1.90043, νd = 37.4. Glass: 900374 class (vendor unresolved). f = +82.558417 mm.**

L51 is the sole element of the fixed GR5 rear group, so its standalone +82.558417 mm focal length is also the calculated
focal length of GR5. It remains stationary during zooming and provides the final positive refractive section before the
20.58 mm published image-space gap.

The fixed rear placement is consistent with the patent's mechanical preference in ¶0053. It also provides a stationary
terminal optical reference while GR2–GR4 execute the zoom law in front of it.

## Glass Identification and Selection

The patent supplies only d-line refractive index and Abbe number for Example 5. It does not name a glass manufacturer,
catalog glass, melt, line indices, or partial-dispersion values. The stored glass strings therefore describe six-digit
coordinate classes rather than asserting commercial identities.

| Element(s) | nd | νd | Authored glass label | Identification status |
|---|---:|---:|---|---|
| L11 | 1.83481 | 42.7 | 835427 class | Vendor unresolved |
| L12, L21 | 1.58313 | 59.5 | 583595 class | Vendor unresolved |
| L13 | 1.49700 | 81.6 | 497816 class | Vendor unresolved |
| L14 | 1.85451 | 25.2 | 855252 class | Vendor unresolved |
| L22 | 1.80610 | 33.3 | 806333 class | Vendor unresolved |
| L23 | 1.45860 | 90.2 | 459902 class | Vendor unresolved |
| L31 | 1.77047 | 29.7 | 770297 class | Vendor unresolved |
| L32 | 1.49710 | 81.6 | 497816 class (source nd 1.49710) | Vendor unresolved; source index retained exactly |
| L41 | 1.94595 | 18.0 | 946180 class | Vendor unresolved |
| L42 | 1.91082 | 35.2 | 911353 class (source vd rounded 35.2) | Vendor unresolved; source precision noted |
| L43 | 1.85135 | 40.1 | 851401 class | Vendor unresolved |
| L51 | 1.90043 | 37.4 | 900374 class | Vendor unresolved |

Catalog comparison does not justify a unique supplier assignment. For example, the 1.49700/81.6 coordinate is compatible
with multiple low-dispersion catalog families across major Japanese, German, and Chinese glass suppliers. The same
problem occurs elsewhere in the prescription. A vendor name would therefore create false specificity rather than improve
the source traceability of the model.

The data consequently carries no `nC`, `nF`, `ng`, or `dPgF` fields. Sony's production literature discusses special
low-dispersion and aspherical elements at the product level, but those marketing descriptions do not map individual
production elements to the patent's numerical glass coordinates. No element in this analysis is therefore labeled ED,
Super ED, anomalous-dispersion, or apochromatic solely from its νd value.

The glass palette still reveals a broad first-order dispersion strategy. High-νd coordinates appear in both the front
negative section (L13), the positive cemented member L23, and the positive focus member L32, while much more dispersive
high-index coordinates occur in L14, L22, L31, and especially L41. Those contrasts give the designer chromatic degrees
of freedom, but the absence of line-index or partial-dispersion data limits any stronger spectral interpretation.

## Focus Mechanism

Example 5 uses published internal focusing. Patent ¶0149 states that GR3 moves toward the object when focusing from
infinity to the near state, and Table 23 supplies both infinity and near spacings at all three zoom positions. No internal
focus reconstruction is required.

| Zoom state | d14 infinity → close (mm) | d18A infinity → close (mm) | GR3 motion |
|---|---:|---:|---|
| Wide | 5.76 → 4.82 | 3.19 → 4.14 | Objectward |
| Mid | 6.74 → 5.45 | 4.36 → 5.66 | Objectward |
| Tele | 7.22 → 5.20 | 9.25 → 11.28 | Objectward |

The two adjacent focus gaps change by nearly equal and opposite amounts because GR3 translates between GR2 and GR4. At
the source's 0.01 mm spacing precision, the sum $d14+d18A$ increases by 0.01 mm between the infinity and close rows at
each zoom state; that small residual is retained rather than redistributed into a reconstructed mechanism.

The close rows are published at raw $d0=279$ mm. The patent does not define that external distance's reference plane
precisely enough to normalize it to the production lens's marketed minimum focus distances without inventing a reference
correction. Accordingly, the model uses the patent's published internal close spacings as-is and separately records Sony's
marketed minimum of 0.28 m at the wide end and 0.24 m at the tele end. It does not force the patent state to either value.

Patent ¶0046 gives the design rationale for placing the focus group behind the positive stop-bearing group: moving a rear
internal group is intended to reduce the angle-of-view change associated with focusing. Example 5 follows that layout,
but no quantitative focus-breathing claim is made here because the patent does not publish a production breathing
measurement for SELP1635G.

## Aspherical Surfaces

Example 5 contains eight aspherical surfaces on four double-aspheric elements: L12 (3A, 4A), L21 (9A, 10A), L32 (17A,
18A), and L43 (23A, 24A). This distributes aspheric correction from the fixed negative front group through the positive
variator, focus group, and rear negative group.

The patent uses the standard conic convention, so its printed $k$ maps directly to LensVisualizer $K$:

$$
x=\frac{cy^2}{1+\sqrt{1-(1+k)c^2y^2}}+A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10}+A_{12}y^{12}.
$$

Here $c=1/R$, $y$ is radial height, and $x$ is sag. There is no alternate $K_A-1$ conversion and no odd-power term.
The numerical source stops at $A_{12}$; the modeled $A_{14}$ entries are zero and add no optical term. Because no scale
factor is applied, the coefficients below are the patent values without dimensional transformation.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 3A | 0 | 1.29886e−5 | −6.46453e−8 | 8.41667e−11 | −7.32985e−14 | 0 |
| 4A | −0.995150 | 3.47810e−5 | −3.24962e−8 | −1.13527e−10 | −2.50732e−13 | 0 |
| 9A | 0 | −7.40380e−6 | 3.87602e−8 | −1.67778e−10 | −7.25665e−12 | 0 |
| 10A | 0 | 1.65677e−6 | 7.49726e−8 | −8.61905e−10 | −3.06990e−12 | 0 |
| 17A | 0 | −8.02720e−7 | 1.30215e−7 | −2.07992e−9 | 2.32326e−11 | 0 |
| 18A | 0 | 2.20397e−5 | 1.35487e−7 | −1.00338e−9 | 1.73469e−11 | 0 |
| 23A | 0 | −5.24839e−5 | 2.46939e−7 | −3.03440e−9 | 5.75983e−12 | 0 |
| 24A | 0 | −1.35885e−5 | 2.87394e−7 | −2.51767e−9 | 7.77274e−12 | 0 |

Surface 4A is the only Example 5 asphere with a nonzero conic constant, $K=-0.995150$, placing its conic base close to a
paraboloid before the polynomial terms are added. The other seven surfaces use spherical conic bases ($K=0$) with even
polynomial departures.

The front and positive-group aspheres correspond directly to the patent's stated correction strategy. Paragraph 0050
places an asphere in the negative first group to exploit high off-axis chief-ray height for field correction, while
¶0051 places an asphere in the positive group to exploit high axial ray height for spherical-aberration and coma control.
The additional L32 and L43 aspheres are published features of Example 5, but the patent does not assign each of those
individual surfaces an exclusive aberration term; they are therefore treated as distributed correction surfaces rather
than given speculative single-purpose labels.

## Conditional Expressions

The patent uses eight conditions to constrain front-group power and bending, back focus, the second negative group's
magnification, and the division of power between the front and rear portions of the zoom. Example 5 reproduces the
published tabulated values for conditions (1)–(7) within rounding.

| Condition | Printed expression | Computed Example 5 value | Published value | Interpretation |
|---:|---|---:|---:|---|
| 1 | $0.7<|f_{GR1}/f_w|<2.2$ | 1.183164 | 1.18 | Front negative-group power relative to wide EFL |
| 2 | $0.7<|BF_w/f_w|<2.4$ | 1.248786 | 1.25 | Physical last-surface-to-image spacing relative to wide EFL |
| 3 | $1.4<(R_{1f}+R_{1r})/(R_{1f}-R_{1r})<5.2$ | 2.404517 | 2.40 | L11 bending |
| 4 | $1.3<f_{G2}/f_{GR1}<4.1$ | 2.784300 | 2.78 | L12 power relative to GR1 |
| 5 | $1.2<\beta_{2n}<4.2$ | 2.548806 | 2.55 | Tele-end transverse magnification of the second negative group |
| 6 | $0.3<|f_a/f_b|<1.1$ | 0.690709 | 0.69 | Front-versus-rear subsystem power division |
| 7 | $0.8<(R_{1r}+R_{2f})/(R_{2f}-R_{1r})<12.0$ | 4.161398 | 4.16 | Air-lens shape between L11 and L12 |
| 8 | $1.2<f_{G2}/f_w<4.9$ | −3.294283 literal; 3.294283 magnitude | 3.29 | Printed sign contradiction |

Condition (8) is internally inconsistent as printed. Example 5 gives $f_{G2}=-54.289791$ mm and $f_w=16.48$ mm, so
the literal ratio is about −3.294283 and cannot satisfy positive bounds. Patent Table 62 nevertheless lists 3.29. Taking
the absolute magnitude reproduces the table, which strongly indicates that absolute-value bars were omitted from the
condition text. The analysis records both the literal source and the numerically coherent interpretation; it does not
alter the prescription to conceal the error.

Taken together, conditions (1), (3), (4), (7), and (8) show how strongly the patent concentrates its design constraints
on the stationary front negative section. Conditions (2), (5), and (6) then constrain the overall back-focus allocation,
the rear negative group's magnification, and the front/rear power balance. This matches the broader design strategy in
¶¶0029–0059: keep the large first group fixed, maintain a wide field with manageable element diameters and aberrations,
and shift the lighter rear groups for zoom and focus.

## Sources and References

1. **JP 2023-44106 A**, “Zoom Lens and Imaging Apparatus,” Sony Group Corporation, filed September 17, 2021 and published
   March 30, 2023. Example 5: ¶¶0146–0162, Tables 21–25, Figure 53; general architecture and conditions: ¶¶0011–0060.
2. **Sony SELP1635G Specifications**, official Sony support page for the FE PZ 16–35mm F4 G:
   https://www.sony.com/electronics/support/lenses-e-mount-lenses/selp1635g/specifications
3. Glass-coordinate comparisons used to keep vendor identities unresolved were checked against current public catalog
   resources from OHARA, HOYA, SCHOTT, HIKARI, CDGM, and Sumita. No vendor-specific glass name is asserted in the data
   because the patent's nd/νd coordinates do not uniquely identify a supplier.
