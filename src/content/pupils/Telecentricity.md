---
slug: telecentricity
title: Telecentricity Explained — What It Actually Means and What It Costs
summary: What telecentricity actually means, how it is achieved by placing the stop at a group focal point, what it costs in design freedom, and why most photographic lenses are not telecentric.
tag: guide
series: pupil-geometry
seriesOrder: 5
toc: true
---

# Telecentricity Explained — What It Actually Means and What It Costs

*Part of the [Pupil Geometry in Photographic Lenses](/articles/pupil-geometry) series.*

---

## Why Photographers Hear This Word

"Telecentric" appears frequently in photographic optics discussions — lens reviews, mount-system debates, and marketing materials. It is almost always used loosely, as a vague synonym for "digital-friendly" or "good rear-ray geometry." But telecentricity is not a quality grade. It is a specific geometric condition with a precise definition, specific structural requirements, and real engineering costs [^1] [^2] [^3] [^4].

Understanding what the word actually means — and what it does *not* mean — prevents two common errors: treating telecentricity as the secret ideal all good lenses ought to reach, and confusing it with "reduced CRA" (chief-ray angle — the angle at which the chief ray strikes the sensor), which is what most photographic discussions actually mean.

## What Telecentricity Actually Means

There are three forms:

**Object-space telecentric.** The entrance pupil (the apparent aperture on the scene side) is located at infinity. All chief rays in object space are parallel to the optical axis.

**Image-space telecentric.** The exit pupil (the apparent aperture on the sensor side) is located at infinity. All chief rays in image space are parallel to the optical axis — light arrives perpendicular to the sensor everywhere across the frame. The CRA is zero at every pixel.

**Double telecentric (bi-telecentric).** Both conditions hold simultaneously.

Each form is a geometric condition, not an optical quality metric.

*[Diagram: Three simple side-by-side sketches. Left: object-space telecentric — chief rays parallel on the scene side, converging on the sensor side. Center: image-space telecentric — chief rays converging on the scene side, parallel on the sensor side. Right: double telecentric — chief rays parallel on both sides. Label pupil positions as "at infinity" on the relevant side.]*

**Most photographic lenses are not telecentric — and that's fine.** Strict telecentricity requires the aperture stop to sit at a specific location (a group focal point), and that placement conflicts with compactness, zoom-range flexibility, aberration correction, and the ability to focus from infinity to close range [^1] [^5]. What many modern digital-era lens designs actually pursue is **reduced CRA** — more favorable image-side chief-ray geometry than earlier film-era or SLR-era designs could achieve. This is a **design tendency on a continuum**, not a binary telecentric/non-telecentric classification. Saying a lens has "reduced CRA" or "more favorable rear-ray geometry" is accurate; saying it "is telecentric" implies a strict condition most photo lenses don't satisfy.

## How Telecentricity Is Achieved — The Structural Mechanism

Telecentricity does not emerge spontaneously from good design. It is achieved by a specific geometric trick: placing the aperture stop where a neighboring lens group "sees" it at its own focal point, so that group images the stop to infinity [^1] [^2] [^3].

More precisely:

**Object-space telecentricity** requires placing the stop at the **rear focal point of the front optical group**. The front group then images the stop to infinity in object space — the entrance pupil is at infinity, and all chief rays on the scene side are parallel to the axis [^1] [^3].

**Image-space telecentricity** requires the complementary arrangement: the stop sits at the **front focal point of the rear optical group**. The rear group images the stop to infinity in image space — the exit pupil is at infinity, and chief rays arrive perpendicular to the sensor [^1] [^3].

**Double telecentricity** requires both conditions simultaneously, tightly constraining the power distribution, element spacing, and physical length of the system.

The essential point: telecentricity is a **constraint on stop placement**, not an emergent property of a well-corrected design.

## What Each Form Is Good For

### Object-space telecentricity: Stable magnification

When chief rays are parallel in object space, magnification is insensitive to small changes in object distance [^1] [^2] [^3]. Objects at slightly different distances within the depth of field are all imaged at the same scale. This is essential for machine-vision metrology: imagine a camera inspecting machined pins on a vibrating conveyor belt. With a non-telecentric lens, pins at slightly different distances are imaged at different magnifications, making dimensional measurements unreliable. With an object-space telecentric lens, magnification is stable.

The tradeoff: the field of view is limited by the front-element diameter, because parallel chief rays cannot "look around" anything larger than the lens aperture. Object-space telecentric lenses for industrial inspection are characteristically large.

### Image-space telecentricity: Zero CRA at the sensor

When the exit pupil is at infinity, the CRA is zero at every point on the sensor [^1] [^3]. This directly suppresses the angular-sensitivity problems described in [*The Exit Pupil and Your Digital Sensor*](/articles/exit-pupil-sensor): microlens misalignment, color crosstalk, and corner color cast all diminish when light arrives perpendicular to the sensor everywhere.

An important clarification: only the **chief rays** are perpendicular to the sensor. The full cone of rays from each field point still has angular spread determined by the f-number. Telecentricity makes the *center* of each cone normal to the sensor, not every ray within it [^1]. But the chief-ray angle dominates the microlens-alignment and color-shading effects.

**The connection to corner illumination.** In [*Why Corners Go Dark*](/articles/corner-illumination), one of the four cosine factors in the cos⁴ law arises from oblique incidence of the chief ray on the sensor surface. Image-space telecentricity eliminates that factor by construction. However, the other contributions — reduced projected pupil area and increased image distance — persist regardless of telecentricity, because they depend on the object-space field geometry [^1]. Telecentricity addresses the sensor-angle-sensitivity problem comprehensively, but it does not abolish radiometric falloff.

### Double telecentricity: Both benefits combined

Used in lithography, metrology, and specialized inspection — not in general-purpose photography. Double telecentric lenses are physically large, inherently finite-conjugate systems, and the tight stop-placement constraints limit design freedom [^3].

## What Telecentricity Costs

**The stop-placement constraint** conflicts with other design goals. The stop must sit at a group focal point — a very specific location. This restricts the designer's freedom to optimize the stop for astigmatism, field curvature, zoom mechanisms, or aberration balance across the field. In most photographic lenses, the optimal stop position for aberration correction is *not* at a group focal point [^1].

**Object-space telecentric lenses** have a field of view limited by the front-element diameter. **Double telecentric designs** impose the tightest constraints, with coupled inter-group spacing, group focal lengths, and total system length.

> **Myth vs. reality**
>
> - "Telecentric" does **not** mean "well-corrected" — it is a geometric condition with costs.
> - "Telecentric" does **not** mean "distortion-free" — a telecentric lens can exhibit barrel or pincushion distortion [^1].
> - "Reduced CRA" is **not** the same as telecentricity — most photographic lenses that reduce CRA do so partially, not by placing the exit pupil at infinity.

> **Key Takeaways**
>
> 1. Telecentricity means the entrance pupil, exit pupil, or both are located at **infinity** — a specific geometric condition achieved by placing the stop at a group focal point.
> 2. Most photographic lenses are **not** telecentric. What they pursue is **reduced CRA** — a continuum of improvement, not a binary switch.
> 3. Telecentricity has real **costs**: stop-placement constraints, size limitations, and conflicts with other design goals. It is a tradeoff, not a free upgrade.

*For the graduate-level mathematical treatment, including the thin-lens derivation of the structural mechanism, see Section 6 of [The Aperture Stop in Practice](/articles/aperture-stop-in-practice). The distortion-independence discussion appears in Section 8.*

---

*Part of the [Pupil Geometry in Photographic Lenses](/articles/pupil-geometry) series. · Previous: [Why Corners Go Dark](/articles/corner-illumination) · Next: [Mirrorless vs. SLR Lens Design](/articles/mirrorless-lens-design)*

[^1]: W. J. Smith, *Modern Optical Engineering*, 4th ed. New York, NY, USA: McGraw-Hill, 2008, chs. 6, 8.

[^2]: J. Sasián, *Introduction to Lens Design*. Cambridge, UK: Cambridge Univ. Press, 2019.

[^3]: Edmund Optics, "Telecentric design topics," *Imaging Resource Guide*, sec. 4.4. [Online]. Available: https://www.edmundoptics.com/knowledge-center/application-notes/imaging/telecentric-design-topics/. [Accessed: Apr. 2026].

[^4]: J. E. Greivenkamp, "Stops and pupils," OPTI 502 course notes, College of Optical Sciences, Univ. Arizona, 2019.

[^5]: S. Ray, *Applied Photographic Optics*, 3rd ed. Oxford, UK: Focal Press (Elsevier), 2002.
