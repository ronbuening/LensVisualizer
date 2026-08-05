## Patent Reference and Design Identification

**Patent:** US 2,662,446 A<br>
**Filed:** December 13, 1951<br>
**Granted:** December 15, 1953<br>
**Inventor:** Albrecht Wilhelm Tronnier<br>
**Assignee:** Voigtländer A.G.<br>
**Title:** *Photographic teleobjective having a composite positive front part axially spaced from a composite negative rear part*<br>
**Embodiment analyzed:** Sole Numerical Example associated with Figure 3

The prescription represents the fixed job-card correlation between US 2,662,446 A and the VOIGTLÄNDER TELOMAR 100mm f/5.5. The patent describes Figure 3 as a higher-aperture 150 mm f/5.4 teleobjective and states that the worked table is proportional to that figure.[1] Period Voigtländer literature identifies a five-element Telomar 100mm f/5.5 for the 24×36 mm Prominent system, used with a dedicated reflex housing, and describes a planned 150 mm conversion using an interchangeable element.[2] Agreement in maker, period, element count, telephoto architecture, aperture class, and 100/150 mm product family supports the correlation. It does not establish that the worked patent table is the exact production prescription of the marketed 100 mm lens.

The data model preserves the patent's normalized table and applies a uniform scale of 100 to all dimensional quantities. The resulting design focal length is 101.259058770842 mm, while the product identity remains the marketed 100 mm. The modeled aperture is f/5.473462636262, kept separate from the marketed f/5.5. Every powered surface is spherical, so no asphere-coefficient transformation is required.

The printed numerical example is internally inconsistent. With the published `a2 = 0.27242`, the table computes an effective focal length of 1.012590588 and a paraxial back focal distance of 0.396823665 in normalized units, rather than the stated 1.0 and `p0′ = 0.38247`. Setting `a2 = 0.279445545` forces the stated `p0′` but leaves the focal length at 1.001044983. Setting `a2 = 0.280089427` forces the focal length to 1.0 but leaves the back focal distance at 0.381170862. No single change to `a2` reconciles both printed targets. The raw table is therefore retained without silent correction.

## Optical Architecture

The design is a five-element, four-group telephoto objective divided into two widely separated functional members. The positive front member, I–II, follows the patent's Fraunhofer-type description: a strong positive biconvex element is followed by a negative biconcave element. Their facing surfaces have equal radii and are separated by only 0.117 mm in the scaled model. The patent explicitly notes that this small gap illustrates how the pair could instead be cemented, but the worked example and data preserve the printed air separation.[1]

The rear member begins with the biconvex positive element III and ends with member IV, a cemented negative-positive pair. L4 supplies the strongly concave object-side surface that defines the patent's principal rear-member conditions. L5 adds positive power at the cemented interface and rear surface, but the isolated L4+L5 member remains negative, with a computed focal length of −40.935552 mm. Including L3 and the intervening air gap, the complete rear functional member has a focal length of −87.568613 mm. These quantities distinguish standalone element power, cemented net power, and the behavior of the complete rear member.

The front functional member has a computed focal length of +70.437242 mm. Its positive power, combined with the negative rear member across the long diaphragm space, produces a front-vertex-to-image track of 84.310366515243 mm, or 0.832620483922 of the 101.259058770842 mm effective focal length. The design therefore meets the project's telephoto criterion. Its back focal distance is 39.682366515243 mm, or 0.391889545458 of the effective focal length, so it is not retrofocus.

The patent does not publish the iris coordinate or any clear apertures. A fresh measurement of the rendered Figure 3 places the stop at approximately 62% of the R4-to-R5 diaphragm space measured from R4. The model therefore assigns 16.89004 mm from R4 to `STO` and 10.35196 mm from `STO` to R5. The inferred physical stop semi-diameter is 6.312253548300 mm, which produces the patent's scaled 18.5 mm entrance-pupil diameter and the modeled f/5.473462636262. The stop placement and all semi-diameters remain modeling inferences rather than factory clear-aperture data.

## Element-by-Element Analysis

### L1 — Member I Positive Element

**nd = 1.58360, νd = 46.2. Glass: J-BAF3 (Hikari catalog equivalent; production supplier unspecified). f = +27.862590 mm.**

L1 is the strongest positive element in the front member. Its biconvex form gathers the entering bundle and supplies most of the positive power required before the long central air space. The refractive index and Abbe number are stored exactly as printed by the patent. The six-digit coordinate code records those optical coordinates without asserting a catalog family or production vendor.

Its rear surface has the same radius as the front surface of L2. Because those surfaces are separated by only 0.117 mm, the boundary behaves almost like a split cemented interface while preserving the source's explicit air gap. L1's standalone power is distinct from the +70.437242 mm focal length of the complete I–II functional member.

### L2 — Member II Negative Element

**nd = 1.72755, νd = 28.4. Glass: SF10 (Schott catalog equivalent; production supplier unspecified). f = −42.864268 mm.**

L2 is the negative component of the positive front member. Its higher refractive index and substantially lower Abbe number provide dispersion contrast against L1 while reducing the front pair's excessive positive power. The patent characterizes the combination as a positive Fraunhofer-type member rather than as two independent singlets.[1]

Although L2 is negative in isolation, the I–II combination remains positive. The narrow air gap is retained because the patent prints it and discusses cementing only as an optional alternative.

### L3 — Member III Positive Element

**nd = 1.62355, νd = 47.0. Glass: E-BAF8 (Hikari catalog equivalent; production supplier unspecified). f = +85.879433 mm.**

L3 begins the rear functional member after the diaphragm space. Its biconvex form reconverges the bundle before the strong negative action of L4. This ordering is central to the patent: the wide air space is bounded on its image side by a biconvex positive lens, followed by a diverging member with a strongly concave surface facing the positive lens.[1]

L3 is weak compared with L1 and L4. Its function is therefore not simply to add positive power, but also to set the ray heights and vergence presented to member IV. The complete III–IV assembly remains negative despite beginning with this positive element.

### L4 — Member IV Front Negative Element

**nd = 1.58264, νd = 42.1. Glass: LF3 (Sumita catalog equivalent; production supplier unspecified). f = −21.121651 mm.**

L4 is the strongest negative singlet in the design and carries surface 7, the characteristic strongly concave surface directed toward L3. Surface 7 makes the largest negative contribution to the surface-by-surface Petzval sum and dominates the diverging action of member IV. The patent's principal radius and spacing conditions are organized around this surface.[1]

L4 is cemented to L5 at surface 8. Its standalone focal length describes the element bounded by surfaces 7 and 8 as though placed in air; it does not describe the cemented member or the complete rear functional group. LF3 provides a close class-compatible dispersion equivalent without identifying the exact historical melt.

### L5 — Member IV Rear Positive Element

**nd = 1.75512, νd = 27.0. Glass: SF4 (Schott catalog equivalent; production supplier unspecified). f = +45.823424 mm.**

L5 is the positive rear component of member IV. Its high index permits useful positive power at the cemented interface and rear surface without reversing the net sign of the doublet. At surface 8, the data assigns the downstream medium and element identity to L5, and no synthetic cement layer is introduced.

The L5 contribution moderates the strong divergence of L4 and helps set final image-space convergence. The isolated cemented pair has a focal length of −40.935552 mm, whereas the complete III–IV functional member, including L3 and its air gap, has a focal length of −87.568613 mm. The difference reflects both L3's positive power and the separation-dependent interaction within the rear assembly.

## Glass Identification and Selection

The patent supplies only d-line refractive indices and Abbe numbers. It does not identify glass manufacturers or catalog names, and it provides no `nC`, `nF`, `ng`, partial-dispersion ratio, or `dPgF` data. Close class-compatible catalog matches are used as Sellmeier dispersion equivalents while the patent coordinates remain authoritative. None is asserted as the exact production melt or supplier.

| Element | nd | νd | Stored glass annotation | Identification status |
|---|---:|---:|---|---|
| L1 | 1.58360 | 46.2 | J-BAF3, Hikari catalog equivalent | Production supplier unspecified |
| L2 | 1.72755 | 28.4 | SF10, Schott catalog equivalent | Production supplier unspecified |
| L3 | 1.62355 | 47.0 | E-BAF8, Hikari catalog equivalent | Production supplier unspecified |
| L4 | 1.58264 | 42.1 | LF3, Sumita catalog equivalent | Production supplier unspecified |
| L5 | 1.75512 | 27.0 | SF4, Schott catalog equivalent | Historical dispersion differs from current equivalent |

The palette alternates moderate-dispersion positive elements with lower-Abbe negative or corrective partners. This is consistent with ordinary achromatic balancing, but the available data do not support an apochromatic or anomalous-partial-dispersion claim. No catalog equivalent is treated as authoritative for a patent melt.

## Focus Mechanism

The patent publishes only the infinity prescription and no finite-distance spacing table. The data therefore declares `NO_INTERNAL_RECONSTRUCTION`, has an empty `var` object, and defines no close-focus optical state. No movement, magnification, effective-focal-length change, or finite-conjugate aberration result is inferred.

The supplied Voigtländer instructions direct the photographer to focus by turning the front ring while observing the ground-glass image through the 5× magnifier.[3] The lens scale visible in the manual and the KONTUR instruction for views closer than about 6 ft support using 1.8288 m as approximate product metadata. They do not provide an exact optical spacing table or identify which internal element or group moves. Accordingly, the moving optical group is not established by the supplied sources.

The `closeFocusM` field consequently carries 1.8288 m only because a numeric catalog field is required. It does not alter any surface spacing in the model. The manual's KONTUR adjustment below approximately 6 ft is a finder parallax-compensation instruction, not an independent patent focus state.[3]

## Patent Conditions

The patent defines the design through focal-length, radius, and spacing inequalities. Evaluated in the patent's own normalized `F = 1` coordinate system, every listed condition passes. Three ratios capture the distinctive geometry around the strong rear concavity:

| Condition | Computed value | Patent interval | Result |
|---|---:|---:|---|
| `|R7| / |R3|` | 0.382075 | 0.20–0.60 | Pass |
| `|R7| / D1` | 0.514858 | 0.25–0.75 | Pass |
| `D2 / |R7|` | 0.411318 | 0.20–0.60 | Pass |

Here `D1` is the axial distance from surface 4 to surface 7, and `D2` is the distance from surface 5 to surface 7, following the patent's definitions. These tests use the printed table, including the retained `a2` value, and do not depend on either rejected correction candidate.

## Verification Summary

Independent sequential height/reduced-angle tracing and an ABCD basis-ray cross-check were run from the final TypeScript arrays. The determinant is unity to floating-point precision, and the matrix constructions agree within numerical roundoff.

| Quantity | Verified result |
|---|---:|
| Effective focal length | 101.259058770842 mm |
| Back focal distance | 39.682366515243 mm |
| Front principal plane from R1 | −53.019155866293 mm |
| Rear principal plane from R9 | −61.576692255599 mm |
| Front vertex to image | 84.310366515243 mm |
| Track / EFL | 0.832620483922 |
| BFD / EFL | 0.391889545458 |
| Entrance-pupil diameter | 18.500000000000 mm |
| Modeled f-number | 5.473462636262 |
| Petzval sum, `Σ φ/(n·n′)` | `-0.000221669075391 mm⁻¹` |
| Petzval radius, `−1/ΣP` | 4511.229175 mm |

Surface-by-surface Petzval was computed as `φ/(n·n′)`, not as an element-level approximation. The inferred geometry was rechecked against positive edge thickness, actual spherical rim slope, shared-gap intrusion, and surface-domain validity after a 600 dpi audit of Figure 3. The rear doublet now uses a common 11.0 mm rim, bringing its outline closer to the drawing while preserving the front member's 10.3 mm and middle member's 10.0 mm profiles. These values remain inferred apertures, not manufacturer specifications.

No sensor or film cover glass, filter, inactive dummy plane, shutter component, reflex mirror, or other mechanical part is included. The reflex housing belongs to the production system but not to the sequential photographic prescription represented here.

## Sources

1. Albrecht Wilhelm Tronnier, US 2,662,446 A, *Photographic teleobjective having a composite positive front part axially spaced from a composite negative rear part*, filed December 13, 1951, granted December 15, 1953; especially the drawings on page 1 and the Numerical Example and conditions on pages 3–5.
2. Voigtländer A.G., *Prominent — A Milestone in Progress*, period brochure W 3115; pages 10–13 identify the Telomar 100mm f/5.5, the 24×36 mm Prominent format, five-element optical section, reflex housing, and proposed 150 mm interchangeable-element configuration.
3. Voigtländer, *Telomar f/5.5 100 mm and 150 mm With Reflex Housing for the Voigtländer Prominent: Instructions for Use*; focusing and finder instructions on manual pages 4–6.
