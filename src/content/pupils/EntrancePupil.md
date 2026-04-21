---
slug: entrance-pupil
title: What Is the Entrance Pupil? The Aperture Your Lens Shows the World
summary: The aperture stop, the entrance pupil, and why the f-number is defined by the image of the iris — not the physical hardware inside the lens.
tag: guide
series: pupil-geometry
seriesOrder: 1
toc: true
---

# What Is the Entrance Pupil? The Aperture Your Lens Shows the World

*Part of the [Pupil Geometry in Photographic Lenses](/articles/pupil-geometry) series.*

---

## The Aperture You Adjust vs. the Aperture the System Uses

Every camera lens contains an iris diaphragm — a set of metal blades that form an adjustable opening, controlling how much light passes through the lens. Photographers interact with this hardware every time they change the f-number. This physical opening is the **aperture stop**: the component that limits the cone of light the lens accepts from an on-axis subject [^1] [^2].

But the aperture stop is not what the optical system actually "shows" to the outside world. That role belongs to the **entrance pupil** — and understanding the distinction between these two things is the single most important conceptual upgrade a photographer can make to their mental model of how lenses work.

The entrance pupil is the image of the aperture stop, formed by the optical elements in front of it [^1] [^2] [^4]. It is what you see when you look into the front of a camera lens: a bright, luminous disk floating somewhere inside the glass. That disk is not the physical iris itself. It is a virtual image of the iris, produced by the front lens group acting as an imaging system for the stop. Because this image exists on the scene side of the lens — what optical engineers call **object space** (everything on the subject's side, as opposed to the sensor side) — it is the aperture that the world "sees" when light enters the lens.

**A hands-on demonstration.** Hold a 50 mm f/2 lens at arm's length and look into the front element. The bright disk you see is approximately 25 mm across — about the width of a U.S. quarter. That is the entrance pupil. The physical iris diaphragm inside the lens barrel is almost certainly a different size, sitting at a different position along the optical axis. What you are seeing is that iris, magnified and repositioned by the front group of lens elements.

*[Diagram: A simple cross-section showing the physical iris inside the lens barrel, the front group of elements, and the entrance pupil as a virtual image of the iris — displaced and potentially magnified. Labels: "Front group," "Aperture stop (iris)," "Entrance pupil (virtual image of stop)," with dashed lines showing the imaging relationship.]*

## How the Front Group Creates the Entrance Pupil

The front optical group — all the lens elements between the front of the lens and the iris diaphragm — acts as a complete imaging system for the physical stop. Just as a magnifying glass creates a magnified virtual image of a page of text, the front group creates an image of the iris in object space. This image is the entrance pupil.

Because the front group is an imaging system, the entrance pupil can differ from the physical iris in both size and location. It may be larger (the front group magnifies the stop), smaller (the front group demagnifies it), or — uncommonly — the same size. It may appear to be located in front of the front element, behind it, or within the front group, depending on the imaging geometry.

In most modern photographic lenses, the entrance pupil is a virtual image — it appears to float somewhere inside the lens barrel, behind the front element. In certain designs, the entrance pupil can instead be a real image located physically in front of the lens. This distinction does not affect the f-number calculation or the entrance pupil's role as a projection center, but it matters when locating the no-parallax point for panoramic stitching (see [*The Entrance Pupil as Projection Center*](/articles/entrance-pupil-projection-center)).

## The f-Number Is Defined by the Entrance Pupil

The f-number of a lens focused at infinity is [^1] [^2]:

$$N = \frac{f}{D_{\text{EP}}}$$

where $f$ is the effective focal length and $D_{\text{EP}}$ is the diameter of the **entrance pupil** — not the diameter of the physical iris. The number printed on a lens barrel or displayed on a camera screen is computed from the size of the entrance pupil, not from the physical hardware inside the lens.

This means that two lenses with identical physical iris diameters can have different f-numbers if their front groups magnify the stop differently. Consider a concrete example: a lens with a physical iris opening of 12 mm and a front group that magnifies the stop by a factor of 2×. The entrance pupil is $12 \times 2 = 24$ mm. If the lens has a focal length of 48 mm, the f-number is $48 / 24 = f/2$. A different lens with the same 12 mm iris but a front group providing 1.5× magnification presents an 18 mm entrance pupil. At the same 48 mm focal length, this lens would be $48 / 18 \approx f/2.7$.

As a real-world reference, Leica publishes the entrance-pupil **position** for the APO-Summicron-M 35 f/2 ASPH.: 13.8 mm in front of the bayonet mount [^3]. (Leica does not directly publish the entrance-pupil diameter, but it follows from the f-number relation: $D_{\text{EP}} = 35 / 2 = 17.5$ mm.) That 17.5 mm disk is what you see looking into the front of the lens — regardless of the physical iris dimensions inside.

## When the Entrance Pupil and the Physical Stop Coincide

There is one special case where the entrance pupil *is* the physical stop: when there are no optical elements in front of the aperture stop. A pinhole camera is the clearest example — the pinhole is both the aperture stop and the entrance pupil, because no optics intervene. Landscape lenses of the 19th century, such as simple meniscus designs with a front-mounted Waterhouse stop, share this property [^5].

But this is the exception. Virtually every modern photographic lens places several optical elements in front of the iris diaphragm, so the entrance pupil is always a separate optical entity — related to the physical stop, but distinct from it in both size and position.

## Why It Matters: A Preview of Consequences

The entrance pupil is not merely a theoretical construct. It drives several practical effects that photographers encounter regularly, each covered in a companion article in this series:

- **Perspective and panoramas.** The entrance pupil is the projection center — the no-parallax rotation point for panoramic stitching. (See [*The Entrance Pupil as Projection Center*](/articles/entrance-pupil-projection-center).)
- **Sensor compatibility.** The entrance pupil's image-side counterpart — the exit pupil — governs how light arrives at the sensor. (See [*The Exit Pupil and Your Digital Sensor*](/articles/exit-pupil-sensor).)
- **Corner illumination.** The entrance pupil's apparent area, as seen from off-axis angles, is one factor in the radiometric falloff that darkens image corners. (See [*Why Corners Go Dark*](/articles/corner-illumination).)
- **Working f-number.** At close focus, the effective f-number increases even though the iris hasn't moved. (See [*Working f-Number*](/articles/working-f-number).)

> **Key Takeaways**
>
> 1. The **aperture stop** is physical hardware — the iris diaphragm with its metal blades.
> 2. The **entrance pupil** is the image of that stop, formed by the front lens group. It is the bright disk you see when you look into the front of a lens.
> 3. The **f-number** is defined by the entrance-pupil diameter, not the physical iris diameter. Two lenses with identical irises can have different f-numbers if their front groups magnify the stop differently.

*For the graduate-level mathematical treatment, see Sections 2–3.1 of [The Aperture Stop in Practice](/articles/aperture-stop-in-practice).*

---

*Part of the [Pupil Geometry in Photographic Lenses](/articles/pupil-geometry) series. · Next: [The Entrance Pupil as Projection Center](/articles/entrance-pupil-projection-center)*

[^1]: W. J. Smith, *Modern Optical Engineering*, 4th ed. New York, NY, USA: McGraw-Hill, 2008, chs. 6, 8.

[^2]: R. Kingslake and R. B. Johnson, *Lens Design Fundamentals*, 2nd ed. Burlington, MA, USA: Academic Press (Elsevier), 2010.

[^3]: Leica Camera AG, "APO-Summicron-M 35 f/2 ASPH. — Technical specification." [Online]. Available: https://leica-camera.com/en-US/photography/lenses/m/apo-summicron-m-35-f2-asph-black-anodized-finish/technical-specification. [Accessed: Apr. 2026].

[^4]: E. Hecht, *Optics*, 5th ed. Boston, MA, USA: Pearson, 2017, ch. 5.

[^5]: S. Ray, *Applied Photographic Optics*, 3rd ed. Oxford, UK: Focal Press (Elsevier), 2002.
