---
slug: spherical-aberration-essentials
title: "Spherical Aberration for Photographers"
summary: A concise, plain-language explanation of how spherical aberration affects sharpness, glow, focus shift, foreground and background blur, and creative lens design.
tag: guide
series: spherical-aberration
seriesOrder: 1
toc: true
---

# Spherical Aberration for Photographers

> **This is the concise version.** It explains the photographic consequences without equations. For wavefront theory, higher-order behavior, mathematical derivations, and the full historical discussion, read [Spherical Aberration: From Optical Error to Creative Design Tool](/articles/spherical-aberration-technical/). The [series introduction](/articles/spherical-aberration/) links both versions.

An ideal lens would bring every ray from one point in the scene to one point in the image. A real lens does not always do that. Rays passing near the center of the aperture may focus at a slightly different distance from rays passing near its edge. That disagreement is *spherical aberration*.[^1] [^2]

The usual result is lower contrast at large apertures, but "softness" is only part of the story. Spherical aberration can leave a recognizable sharp core while surrounding it with glow. It can move the most useful focus when the aperture changes. It can also make foreground and background blur look different, even when both are equally far from the focused subject.

![Different zones of the aperture can come to focus at different axial positions. The lens therefore produces a narrow region of crossings rather than one universal geometrical focus. Simplified conceptual diagram.](/diagrams/spherical-aberration/01-caustic.svg)

## 1. One Point Does Not Always Produce One Focus

Think of the aperture as a set of concentric zones. Rays passing close to the optical axis form the central zone. Rays farther out form middle and marginal zones. In a lens with residual spherical aberration, those zones do not all agree on where the image point should be.

The image sensor or film must be placed somewhere within that spread. One plane may favor the central rays. Another may favor the outer rays. A third may give the smallest overall blur. A photographer may prefer a slightly different plane because it gives stronger edge contrast or a more pleasing transition.

This is why "the best focus" is not always one absolute location. Different focusing methods can choose slightly different compromises without any of them being obviously broken.

## 2. What It Looks Like in a Photograph

The most characteristic result is often a **sharp core with a softer halo**. Some rays remain tightly concentrated and preserve the location of fine detail. Other rays spread light over a larger area and lower local contrast. Bright highlights can glow into neighboring dark tones, while edges remain visible beneath the glow.[^3]

That is not the same as simply missing focus. Ordinary defocus spreads the whole point image because the image plane is in the wrong place. Aberrational soft focus can preserve a relatively concentrated component while adding a broader one.

![A well-concentrated point, a concentrated core with a broader halo, and ordinary defocus are different image structures. Simplified conceptual diagram.](/diagrams/spherical-aberration/04-core-halo.svg)

Spherical aberration is easiest to notice around bright points, backlit edges, reflective details, and fine texture. It may be less obvious in flat light or low-contrast scenes. The same lens can therefore look restrained in one photograph and conspicuously soft in another.

Glow alone does not prove spherical aberration. Longitudinal color, internal flare, diffusion filters, condensation, sensor reflections, and processing can produce similar appearances. The defining feature is that different pupil zones prefer different focus positions.

## 3. Why Stopping Down Usually Helps

Closing the aperture blocks the outer pupil zones. If those outer zones carry most of the disagreement, contrast rises quickly and the halo shrinks. This is why many fast lenses look markedly cleaner one or two stops down.[^1] [^2]

Stopping down does not repair the blocked rays. It simply prevents them from reaching the image. The remaining inner bundle is easier to bring to a common focus.

The improvement is not always perfectly smooth. A lens can have a strong middle-zone residual even when its outermost rays are comparatively well balanced. In that case, a small amount of stopping down may remove rays that were partly compensating the middle zone. Further stopping down then removes the troublesome middle zone as well. The behavior depends on the full pupil distribution, not only the edge of an aberration plot.

Diffraction eventually becomes the limit. The practical result is a progression from aberration-limited wide-open performance, through a cleaner middle-aperture range, to diffraction-limited small apertures.

## 4. Why Focus Can Move When the Aperture Changes

If the central and outer zones prefer different image planes, changing their relative weight can change the plane that looks best. This is called **stop-down focus shift**.

A camera may focus the lens wide open and then close the diaphragm for the exposure. When the aperture closes, the outer zones contribute less, so the most useful focus can move toward the position preferred by the inner zones. The movement may be small, but it can matter with fast lenses, short working distances, or shallow depth of field.

There are two useful ways to test this:

1. Keep the focus fixed while changing aperture. This shows the combined effects of cleaner correction and focus shift.
2. Refocus at every aperture. This shows the best performance available from each pupil size.

Those tests answer different questions and should not be treated as interchangeable.

## 5. Foreground and Background Can Look Different

An out-of-focus point is not always a uniformly filled disk. Spherical aberration can move light toward the center of the disk or toward its edge.

Under the convention used by Surface & Stop, an **undercorrected** state tends to give background points a center-weighted disk with a softer perimeter, while foreground points tend to become more edge-weighted. An **overcorrected** state exchanges those tendencies.[^4]

![Foreground and background points sample the same pupil-zone disagreement from opposite sides of focus. Reversing the correction exchanges the center-weighted and edge-weighted tendencies. Disk sizes are normalized. Simplified conceptual diagram.](/diagrams/spherical-aberration/06-front-rear-defocus.svg)

This does not mean every undercorrected lens produces the same background or every overcorrected lens produces bright rings. Higher-order aberration, vignetting, coma, astigmatism, diaphragm shape, exposure, and scene structure all modify the result.

Spherical aberration therefore explains part of what photographers call *bokeh*, not all of it. Cat's-eye shapes mainly come from optical vignetting. Polygonal outlines come from the diaphragm. Colored edges may come from longitudinal color or spherochromatism. Off-axis smearing may come from coma or astigmatism.

## 6. How Designers Control It

Lens designers have several ways to shape the residual:[^1] [^5]

- **Surface curvature and lens bending:** Two elements with the same focal power can produce different spherical aberration because their front and rear surfaces divide the refraction differently.
- **More elements and air spaces:** Additional surfaces give the designer more opportunities to make positive and negative aberration contributions oppose one another.
- **Glass choice:** Refractive index changes the curvatures needed for a given power. Dispersion materials are chosen mainly for color correction, but every glass change also affects the monochromatic design.
- **Aspherical surfaces:** An asphere can bend different pupil zones by different amounts. It is a design variable, not an automatic guarantee of perfect correction.
- **Moving groups:** A floating or variable group can maintain correction at close focus or deliberately change the residual.
- **The working aperture:** After the lens is built, stopping down selects a smaller part of the pupil and reduces the contribution of outer zones.

Correcting spherical aberration does not automatically correct coma. A design that corrects both at one conjugate must also satisfy the separate aplanatic, or sine-condition, requirement. This is one reason a useful soft-focus lens cannot simply add uncontrolled spherical aberration and ignore everything else.

## 7. When Designers Use It Deliberately

A controlled residual can serve three different photographic goals.

### A soft subject with a resolved core

A traditional soft-focus lens keeps enough light concentrated to define the subject while allowing other zones to create a halo. The subject remains recognizable and partly resolved, but local contrast is reduced.

The [Minolta Varisoft Rokkor 85mm f/2.8](/lens/varisoft-rokkor-85f28/) uses a variable internal air space and coordinated compensation to change this core-and-halo balance.[^6] [^7]

### A sharp subject with different foreground or background rendering

A defocus-control lens uses a smaller residual and compensates the accompanying image-plane movement. The main subject can remain concentrated while the radial distribution of foreground and background points changes.

The [Nikon AF DC-Nikkor 135mm f/2D](/lens/nikon-af-dc-nikkor-135mm-f2/) uses **R** for an undercorrected state favoring softer-edged background blur and **F** for an overcorrected state favoring foreground blur.[^4] [^8]

### A user-adjustable under–sharp–over range

The [Voigtländer Portrait Heliar 75mm f/1.8](/lens/voigtlander-portrait-heliar-75f18/) allows the photographer to move through undercorrected, sharp, and overcorrected states. Cosina notes that the control also changes focus position, effective aperture slightly, and peripheral illumination in the undercorrected direction.[^9]

## 8. Four Lens Strategies Compared

| Lens | Design goal | What changes |
| --- | --- | --- |
| [NIKON NIKKOR Z 135mm f/1.8 S Plena](/lens/nikon-z-135f18-plena/) | Fixed high correction | A complex fixed design holds one intended balance across a very large aperture and changing focus distance.[^10] |
| [MINOLTA VARISOFT ROKKOR 85mm f/2.8](/lens/varisoft-rokkor-85f28/) | Variable subject softness | The in-focus subject changes from concentrated to core-and-halo rendering. |
| [NIKON AF DC-NIKKOR 135mm f/2D](/lens/nikon-af-dc-nikkor-135mm-f2/) | Variable foreground–background bias | The subject can remain concentrated while **R** and **F** exchange the favored side of defocus. |
| [VOIGTLÄNDER PORTRAIT HELIAR 75mm f/1.8](/lens/voigtlander-portrait-heliar-75f18/) | Adjustable under–sharp–over range | Subject softness and defocus weighting both change with the control. |

A fifth example shows that the entire optical arrangement can also be changed. In the [Nikon Fuwatto Soft 90mm f/4.8](/lens/nikon-fuwatto-soft-90mm-f48/), a cemented doublet is reversed and a rear corrector is removed to create a fixed soft-focus configuration.[^11]

## 9. Apodization Is Related, but Different

Some lenses smooth out-of-focus disks by reducing pupil transmission toward the edge. This is **apodization**. It shapes blur by changing how much light each pupil zone contributes rather than by deliberately making the zones focus at different distances.

The visual goal can overlap with spherical-aberration control, but the mechanism is different. An apodization element, filter, or coating changes pupil amplitude. Spherical aberration changes pupil phase and focus distribution. A lens can use either method, or combine them with vignetting and other aberration controls.

## 10. A Practical Way to Examine a Lens

Use a stable camera position and include three things in the scene:

- a detailed subject at the focus distance;
- bright or high-contrast points behind it;
- similar points in front of it.

Photograph the lens wide open and through several smaller apertures. First keep focus fixed. Then repeat while refocusing at every aperture. For a variable-aberration lens, repeat the sequence at the neutral, undercorrected, and overcorrected settings.

Look for:

- whether fine detail retains a concentrated core;
- how much halo spreads around highlights and edges;
- whether the best-focus plane moves as the aperture changes;
- whether background disks are more center-weighted or edge-weighted;
- whether the foreground shows the opposite tendency;
- whether coma, colored rims, vignetting, or diaphragm shape are being mistaken for spherical aberration.

This will not replace a wavefront or prescription analysis, but it separates several effects that are often collapsed into the word "soft."

## 11. The Main Point

Spherical aberration begins with a simple disagreement: different zones of the aperture do not share one focus. Lens design decides how large that disagreement is, where it lies in the pupil, how it changes with aperture and focus, and whether it should be suppressed or used.

In one lens, success means making the residual small enough that it no longer limits the intended image. In another, success means preserving a concentrated subject while changing the foreground or background. In a soft-focus design, success may mean placing a clear core inside a controlled halo.

The important question is not merely whether spherical aberration exists. It is whether the remaining distribution serves the photograph.

For the full treatment, continue to [Spherical Aberration: From Optical Error to Creative Design Tool](/articles/spherical-aberration-technical/).

## Bibliography

[^1]: R. Kingslake and R. B. Johnson, *Lens Design Fundamentals*, 2nd ed. Amsterdam, The Netherlands: Academic Press, 2010.

[^2]: W. T. Welford, *Aberrations of Optical Systems*. Bristol, U.K.: Adam Hilger, 1986.

[^3]: V. N. Mahajan, *Optical Imaging and Aberrations, Part II: Wave Diffraction Optics*, 2nd ed. Bellingham, WA, USA: SPIE Press, 2011.

[^4]: M. Yanagisawa, "Optical system having a variable out-of-focus state," U.S. Patent 4,908,639, Mar. 13, 1990. [Online]. Available: https://patents.google.com/patent/US4908639A/en. [Accessed: Aug. 7, 2026].

[^5]: J. M. Sasián, *Introduction to Lens Design*. Cambridge, U.K.: Cambridge University Press, 2019.

[^6]: Y. Okano, A. Nakamura, and T. Ogura, "Soft focus lens system," U.S. Patent 4,124,276, Nov. 7, 1978. [Online]. Available: https://patents.google.com/patent/US4124276A/en. [Accessed: Aug. 7, 2026].

[^7]: Minolta Camera Co., Ltd., "Your 85mm f/2.8 Varisoft Rokkor," user instructions. [Online]. Available: https://allphotolenses.com/public/files/pdfs/67c64fdb77248cd2a5e41fd4c7c2c8cf.pdf. [Accessed: Aug. 7, 2026].

[^8]: K. Ohshita, "Ai AF DC Nikkor 135mm F2S," *NIKKOR—The Thousand and One Nights*, no. 32, Nikon Corporation. [Online]. Available: https://imaging.nikon.com/imaging/information/story/0032/. [Accessed: Aug. 7, 2026].

[^9]: Cosina Co., Ltd., "PORTRAIT HELIAR 75mm F1.8," *Voigtländer*. [Online]. Available: https://www.cosina.co.jp/voigtlander/en/z-mount/portrait-heliar-75mm-f1-8/. [Accessed: Aug. 7, 2026].

[^10]: Nikon Corporation, "NIKKOR Z 135mm f/1.8 S Plena," *Nikon Consumer*. [Online]. Available: https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_135mmf18s/. [Accessed: Aug. 7, 2026].

[^11]: K. Ohshita, "Nikon Fun Fun LensSet, Part 1 (Gugutto Macro/Fuwatto Soft)," *NIKKOR—The Thousand and One Nights*, no. 52, Nikon Corporation. [Online]. Available: https://imaging.nikon.com/imaging/information/story/0052/. [Accessed: Aug. 7, 2026].
