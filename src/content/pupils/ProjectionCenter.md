---
slug: entrance-pupil-projection-center
title: The Entrance Pupil as Projection Center — Perspective, Panoramas, and the "Nodal Point" Myth
summary: Why the entrance pupil — not the "nodal point" — is the correct rotation axis for parallax-free panoramic stitching, and how to find it empirically for any lens.
tag: guide
series: pupil-geometry
seriesOrder: 2
toc: true
---

# The Entrance Pupil as Projection Center — Perspective, Panoramas, and the "Nodal Point" Myth

*Part of the [Pupil Geometry in Photographic Lenses](/articles/pupil-geometry) series.*

---

## The Problem: Why Do Panoramas Have Ghosting at the Stitch Lines?

If you have ever stitched a panorama from multiple overlapping frames, you may have encountered a frustrating artifact: objects at different distances from the camera appear to shift relative to each other between frames. Near objects slide sideways against the background. The stitching software does its best, but the overlapping regions do not quite align, producing ghosted edges, doubled features, and broken lines.

This happens because the camera was rotated about the wrong point. The question is: what is the *right* point?

The answer is the **entrance pupil** — the apparent aperture of the lens as seen from the scene side (introduced in [*What Is the Entrance Pupil?*](/articles/entrance-pupil)). When the camera rotates about the center of the entrance pupil, near and far objects maintain the same angular relationships in every frame, and the overlapping regions register correctly [^1] [^3] [^4]. The stitch is seamless.

When the rotation axis is displaced from the entrance pupil — for example, when the camera rotates about the tripod socket, which is typically well behind the entrance pupil — near objects shift laterally relative to far objects between frames. This relative shift is **parallax**, and it is the direct cause of the stitching artifacts described above.

*[Diagram: Two side-by-side views of a camera on a panorama head. Left: rotation axis at entrance pupil (no parallax — near and far targets stay aligned). Right: rotation axis at tripod socket (parallax — near target shifts relative to far target).]*

## Why the Entrance Pupil? The Projection Center

The entrance pupil is the correct rotation point because it is the **projection center** of the lens — the point from which the lens maps angular positions in the scene to linear positions on the sensor [^1] [^2].

For a rectilinear (non-fisheye) lens focused at infinity, the mapping follows:

$$y' = f \tan W$$

where $y'$ is the image height on the sensor, $f$ is the effective focal length, and $W$ is the semi-field angle measured from the optical axis. This is rectilinear projection: straight lines in the scene map to straight lines in the image, and the mapping is governed by the tangent of the field angle.

The point from which these angular relationships are measured — the vertex of the projection — is the center of the entrance pupil. This is why the entrance pupil, rather than the front element, the rear element, or the lens's physical center, is the geometrically meaningful reference point for perspective. All angular relationships measured from the entrance pupil are faithfully preserved in the image. Measure them from any other point, and the correspondence breaks down.

## Finding the Entrance Pupil for Panoramic Stitching

For the minority of lenses that publish entrance-pupil position data, setup is straightforward. The Leica APO-Summicron-M 35 f/2 ASPH., for example, specifies 13.8 mm in front of the bayonet mount [^5]. Set the panorama head's adjustment rail so that the rotation axis falls at that point.

For lenses that do not publish this information — which is most of them — the entrance-pupil position can be found empirically using the **two-target method**:

1. Set up two vertical targets (pencils, poles, or any slender objects) at substantially different distances from the camera, aligned so they overlap in the viewfinder.
2. With the camera on the panorama head, rotate it left and right.
3. If the near target shifts relative to the far target as the camera rotates, the rotation axis is not at the entrance pupil. Slide the camera forward or backward on the rail and repeat.
4. When rotation produces no relative shift between the targets, the rotation axis coincides with the entrance pupil.

This procedure typically takes a few minutes and is reliable to within a millimeter or two — more than adequate for any practical panoramic stitching application.

### Zoom Lenses and Wide-Angles

**Zoom lenses:** The entrance-pupil position changes with focal length, because the front group's imaging geometry shifts as the zoom mechanism reconfigures the elements. The panorama-head setting must be re-adjusted for each focal length used in the stitch.

**Wide-angle lenses:** The entrance pupil is often located close to the front element. For ultra-wide lenses, this may place the no-parallax point very near the front of the lens, requiring careful positioning on the rail.

> **Advanced note: Residual parallax from pupil aberrations**
>
> The entrance pupil is the exact no-parallax point only in the paraxial (first-order) model. In real lenses, the effective pupil position, size, and shape vary slightly with field angle due to pupil aberrations [^6]. No single rotation point perfectly eliminates parallax across the entire field of view. In practice, this residual parallax is negligible for panoramic stitching — the entrance-pupil position is the correct answer to well within the accuracy of a manual rail adjustment.

> **Note: The "nodal point" — a persistent misnomer**
>
> Photographers frequently refer to the panorama rotation point as the "nodal point." This is technically incorrect [^1] [^7]. The **nodal points** are cardinal points of the lens system defined by the property of unit angular magnification — a ray aimed at the front nodal point exits appearing to come from the rear nodal point at the same angle [^1] [^2]. They describe how the lens maps ray angles through the principal planes, and they have nothing to do with the aperture stop or the pupils.
>
> The conflation almost certainly originates from the simplest teaching model in optics: the single thin lens with the stop at the lens plane. In that model, the principal points, nodal points, entrance pupil, and exit pupil all collapse to a single point. Students learn this simplified picture, internalize the coincidence, and carry it into discussions of real lenses — where these quantities occupy different positions along the optical axis [^1] [^2].
>
> The correct term for the no-parallax rotation point is the **entrance pupil**. It defines the projection center, and the projection center is the point about which rotation preserves angular relationships across overlapping frames.

> **Key Takeaways**
>
> 1. The **entrance pupil** is the correct rotation point for parallax-free panoramic stitching — not the "nodal point," the front element, or the tripod socket.
> 2. The entrance pupil is the **projection center** of the lens: the point from which angular positions in the scene are mapped to positions on the sensor.
> 3. If the lens does not publish its entrance-pupil position, the **two-target method** finds it empirically in minutes.

*For the graduate-level mathematical treatment, see Sections 3.2–3.3 and the misconception discussion in Section 8 of [The Aperture Stop in Practice](/articles/aperture-stop-in-practice).*

---

*Part of the [Pupil Geometry in Photographic Lenses](/articles/pupil-geometry) series. · Previous: [What Is the Entrance Pupil?](/articles/entrance-pupil) · Next: [The Exit Pupil and Your Digital Sensor](/articles/exit-pupil-sensor)*

[^1]: W. J. Smith, *Modern Optical Engineering*, 4th ed. New York, NY, USA: McGraw-Hill, 2008, chs. 6, 8.

[^2]: R. Kingslake and R. B. Johnson, *Lens Design Fundamentals*, 2nd ed. Burlington, MA, USA: Academic Press (Elsevier), 2010.

[^3]: R. Littlefield, "Theory of the no-parallax point in panorama photography," 2006. [Online]. Available: http://www.janrik.net/PanoPostings/NoParallaxPoint/TheoryOfTheNoParallaxPoint.pdf. [Accessed: Apr. 2026].

[^4]: D. A. Kerr, "The proper pivot point for panoramic photography," tech. note, 2005.

[^5]: Leica Camera AG, "APO-Summicron-M 35 f/2 ASPH. — Technical specification." [Online]. Available: https://leica-camera.com/en-US/photography/lenses/m/apo-summicron-m-35-f2-asph-black-anodized-finish/technical-specification. [Accessed: Apr. 2026].

[^6]: J. Sasián, "Pupil aberrations," OPTI 518 lecture notes, College of Optical Sciences, Univ. Arizona, 2014; rev. 2021.

[^7]: E. Hecht, *Optics*, 5th ed. Boston, MA, USA: Pearson, 2017, ch. 5.
